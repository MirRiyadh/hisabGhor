import {Alert, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import GlueStackProvider from '../../gluestack_config/gluestackProvider';
import CommonHeaderPlusBack from '../../custom/commonHeader/CommonHeaderPlusBack';
import CommonWriteBox from '../../custom/commonWriteBox/CommonWriteBox';

const dueIcon = require('../../../assets/icons/payables.png');

import {
  Avatar,
  Box,
  Button,
  ButtonText,
  CheckIcon,
  HStack,
  Icon,
  Menu,
  MenuItem,
  MenuItemLabel,
  ScrollView,
  VStack,
  View,
  GlobeIcon,
  SettingsIcon,
  AddIcon,
  CloseIcon,
  Divider,
  ButtonIcon,
  InputField,
} from '@gluestack-ui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import CustomModal from '../../custom/customModal/CustomModal';
import {Text} from '@gluestack-ui/themed';
import CommonDateFilter from '../../custom/dateFilter/commonDateFilter';
import {globalStyle} from '../../styles/GlobalStyle';

import {Image} from '@gluestack-ui/themed';
import {Input} from '@gluestack-ui/themed';
import {useObject, useQuery, useRealm} from '../../../database/realm/realm';
import {ILoan, ILoanPaid} from '../../../database/interface/interface';
import {addNewSerial} from '../../../database/realm/serial';

const LoanHistoryScreen = ({route}: any) => {
  const Item: ILoan = route?.params?.item;

  const loanPaidAllData = useQuery<ILoanPaid>('LoanPaid');
  const realm = useRealm();
  // const [searchText, setSearchText] = useState();
  const [modal, setModal] = useState(false);
  // const [isPaid, setIsPaid] = useState(false);

  const [laonDetailsData, setLoanDetailsData] = useState({
    refer_id: Item._id,
    serial: 1,
    paidAmount: 0,
    reason: '',
    date: new Date(),
  });

  // console.log(duePaidAllData);

  const handleSaveLoanData = React.useCallback(async () => {
    if (Item.loanAmount < laonDetailsData.paidAmount) {
      return Alert.alert("This amount not exist in 'Loan'");
    }
    if (loanPaidAllData.length !== 0) {
      laonDetailsData.serial = addNewSerial(loanPaidAllData);
    }

    const findItem = realm.objectForPrimaryKey<ILoan>('Loan', Item._id);

    realm.write(() => {
      findItem.paidAmount = findItem.paidAmount + laonDetailsData.paidAmount;
      findItem.loanAmount = findItem.loanAmount - laonDetailsData.paidAmount;
    });

    realm.write(() => {
      realm.create('LoanPaid', {
        ...laonDetailsData,
      });
    });
    setModal(!modal);
  }, [laonDetailsData]);

  return (
    <GlueStackProvider>
      <Box h={'100%'}>
        <CommonHeaderPlusBack
          isBack={true}
          title={`${Item.fullName}`}
          // isSearch={true}
          // setSearchText={setSearchText}
          // searchText={searchText}
        />
        {/* <CommonDateFilter /> */}
        <Box mx="$4" mb="$1">
          <Divider />
        </Box>
        <ScrollView>
          <VStack>
            {loanPaidAllData.length !== 0 ? (
              loanPaidAllData.map(item => (
                <Box key={item._id.toHexString()}>
                  <HStack
                    justifyContent="space-between"
                    alignItems="center"
                    mx="$2"
                    p="$2"
                    py="$3"
                    position="relative">
                    {/* user / avater  */}
                    <HStack gap="$3">
                      <View
                        bg="$coolGray300"
                        style={{
                          width: 55,
                          height: 55,
                        }}
                        borderRadius="$md"
                        justifyContent="center"
                        alignItems="center">
                        <FontAwesome name="dollar" size={30} color="gray" />
                      </View>
                      {/* cost info  */}
                      <VStack gap="-$1">
                        <Text fontSize="$sm">Reason: {item.reason}</Text>
                        <Text fontSize="$sm">${item.paidAmount} </Text>
                        <Text fontSize="$sm">
                          {new Date(item.date).toLocaleDateString()}
                        </Text>
                      </VStack>
                    </HStack>
                    {/* due  */}

                    {/* Paid  */}
                    {/* <TouchableOpacity>
                  <FontAwesome name="book" size={20} color="gray" />
                </TouchableOpacity> */}
                    <Box p="$1" position="relative" right={0} top={2}>
                      <Menu
                        placement="bottom"
                        // right="$4"
                        top="-$4"
                        width="$16"
                        gap="-$1"
                        trigger={({...triggerProps}) => {
                          return (
                            <TouchableOpacity {...triggerProps}>
                              <Feather
                                name="more-vertical"
                                size={20}
                                color="gray"
                              />
                            </TouchableOpacity>
                          );
                        }}>
                        <MenuItem
                          onPress={() => {
                            realm.write(() => {
                              realm.delete(item);
                            });
                          }}
                          key="Delete"
                          textValue="Delete">
                          {/* <Icon as={AddIcon} size="sm" mr="$2" /> */}
                          <MenuItemLabel size="md">Delete</MenuItemLabel>
                        </MenuItem>
                      </Menu>
                    </Box>
                  </HStack>
                  <View
                    style={{
                      borderStyle: 'dashed',
                      borderColor: 'gray',
                      borderBottomWidth: 1,
                      marginHorizontal: '4%',
                    }}></View>
                </Box>
              ))
            ) : (
              <Box justifyContent="center" alignItems="center">
                <Text color="$coolGray400" fontWeight="$bold" size="md">
                  No found any due
                </Text>
              </Box>
            )}
          </VStack>
        </ScrollView>
        {Item?.loanAmount !== 0 && (
          <CommonWriteBox
            icon={<FontAwesome name="fax" color="white" size={30} />}
            title="Total Loan"
            amount={`${Item?.loanAmount}`}
            btTitle="Add Loan"
            modal={modal}
            setModal={setModal}
          />
        )}

        <CustomModal
          modalVisible={modal}
          setModalVisible={setModal}
          Radius={20}
          height={280}
          width="90%"
          appearance={true}
          backButton={true}
          // backButtonTitle="Modal Open hoise"
        >
          <>
            <Box my="$2" justifyContent="center" alignItems="center">
              <Image w={60} h={60} m={'auto'} source={dueIcon} alt="savings" />
            </Box>
            <ScrollView>
              <Box>
                <VStack px="$1" gap="$4" mt="$3">
                  <Input rounded="$lg">
                    <InputField
                      placeholder="Reason"
                      onChangeText={text =>
                        setLoanDetailsData({...laonDetailsData, reason: text})
                      }
                    />
                  </Input>
                  <Input rounded="$lg">
                    <InputField
                      placeholder="Amount"
                      onChangeText={text =>
                        setLoanDetailsData({
                          ...laonDetailsData,
                          paidAmount: Number(text),
                        })
                      }
                    />
                  </Input>
                  {/* <Input rounded="$lg">
                    <InputField
                      placeholder="Paid Amount(Optional)"
                      onChangeText={text =>
                        setDueDetailsData({
                          ...dueDetailsData,
                          paidAmount: Number(text),
                        })
                      }
                    />
                  </Input> */}

                  {/* <Input rounded="$lg" w="25%">
                    <InputField fontSize={16} placeholder="📅 Date" />
                  </Input> */}
                </VStack>
              </Box>
            </ScrollView>
            <HStack
              gap="$5"
              justifyContent="space-around"
              alignItems="center"
              mt="$5"
              pb="$2">
              <Button
                onPressIn={() => handleSaveLoanData()}
                backgroundColor="#4849BF"
                action="positive"
                w="45%"
                onPress={() => {}}>
                <ButtonIcon as={AddIcon} size="xl" />
                <ButtonText px="$2" fontSize={18} fontWeight="400">
                  ADD
                </ButtonText>
              </Button>
              <Button
                backgroundColor="#6f6fd9"
                w="45%"
                action="negative"
                onPress={() => setModal(false)}>
                <ButtonIcon as={CloseIcon} size="xl" />
                <ButtonText px="$2" fontSize={18} fontWeight="400">
                  Cancel
                </ButtonText>
              </Button>
            </HStack>
          </>
        </CustomModal>
      </Box>
    </GlueStackProvider>
  );
};

export default LoanHistoryScreen;
