import {TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import GlueStackProvider from '../../gluestack_config/gluestackProvider';
import CommonHeaderPlusBack from '../../custom/commonHeader/CommonHeaderPlusBack';
import CommonWriteBox from '../../custom/commonWriteBox/CommonWriteBox';

const addUser = require('../../../assets/icons/add-user-3.png');

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
  Input,
  InputField,
  ButtonIcon,
  CloseCircleIcon,
  CloseIcon,
} from '@gluestack-ui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import CustomModal from '../../custom/customModal/CustomModal';
import {Text} from '@gluestack-ui/themed';
import CommonDateFilter from '../../custom/dateFilter/commonDateFilter';
import {globalStyle} from '../../styles/GlobalStyle';
import {Image} from '@gluestack-ui/themed';
import {ILoan} from '../../../database/interface/interface';
import {useQuery, useRealm} from '../../../database/realm/realm';
import {addNewSerial} from '../../../database/realm/serial';

const LoanMainScreen = ({navigation}: any) => {
  const loanAllData = useQuery<ILoan>('Loan');
  // console.log(loanAllData);
  const realm = useRealm();
  const [searchText, setSearchText] = useState();
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [selectItem, setSelectItem] = useState(null);

  const [loanData, setLoanData] = useState({
    serial: 1,
    address: '',
    loanAmount: 0,
    paidAmount: 0,
    fullName: '',
    phone: '',
  });

  // console.log(addNewSerial(loanAllData));

  const handleSaveloanData = React.useCallback(async () => {
    if (loanAllData.length !== 0) {
      loanData.serial = addNewSerial(loanAllData);
    }
    console.log(loanData);
    realm.write(() => {
      realm.create('Loan', {
        ...loanData,
      });
    });
  }, [loanData]);

  const handleUpdateloanData = React.useCallback(async () => {
    loanData._id = selectItem._id;
    loanData.serial = selectItem.serial;

    if (!loanData.address) {
      loanData.address = selectItem.address;
    }
    if (!loanData.loanAmount) {
      loanData.loanAmount = selectItem.loanAmount;
    }
    if (!loanData.fullName) {
      loanData.fullName = selectItem.fullName;
    }
    if (!loanData.phone) {
      loanData.phone = selectItem.phone;
    }

    const findItem = realm.objectForPrimaryKey('Loan', selectItem._id);
    realm.write(() => {
      findItem.address = loanData.address;
      findItem.loanAmount = loanData.loanAmount;
      findItem.fullName = loanData.fullName;
      findItem.phone = loanData.phone;
    });
    setSelectItem(null);
  }, [loanData]);

  // console.log('loan Data', loanData);

  useEffect(() => {
    if (selectItem) {
      setLoanData({
        address: selectItem?.address,
        loanAmount: selectItem?.loanAmount,
        paidAmount: selectItem?.paidAmount,
        fullName: selectItem?.fullName,
        phone: selectItem?.phone,
      });
    }
  }, [selectItem]);

  return (
    <GlueStackProvider>
      <Box h={'100%'}>
        <CommonHeaderPlusBack
          isBack={true}
          title={'Loans'}
          isSearch={true}
          setSearchText={setSearchText}
          searchText={searchText}
        />
        <CommonDateFilter />
        <ScrollView>
          {loanAllData.length !== 0 ? (
            loanAllData.map(item => (
              <VStack key={item?._id.toHexString()}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('loans-history', {item})}>
                  <HStack
                    justifyContent="space-between"
                    alignItems="center"
                    mx="$2"
                    p="$2"
                    borderColor="$coolGray200"
                    borderWidth="$1"
                    position="relative">
                    {/* user / avater  */}
                    <Avatar
                      style={{
                        backgroundColor: globalStyle.primary,
                      }}
                      size="lg"
                      borderRadius="$full">
                      {/* <AvatarFallbackText>Sandeep Srivastava</AvatarFallbackText> */}
                      <FontAwesome name="user" size={45} color="white" />
                    </Avatar>
                    {/* cost info  */}
                    <VStack gap="-$0.5">
                      <Text fontSize="$sm">
                        {item.serial}. {item?.fullName}
                      </Text>
                      <Text fontSize="$sm">{item?.phone}</Text>
                      <Text fontSize="$sm">{item?.address}</Text>
                    </VStack>
                    {/* loan  */}
                    <Box
                      py="$1"
                      px="$4"
                      bg="$coolGray100"
                      rounded="$md"
                      alignItems="center"
                      justifyContent="center"
                      h="$12">
                      <VStack
                        gap="-$1"
                        justifyContent="center"
                        alignItems="center">
                        <Text fontSize="$sm">Loan</Text>
                        <Text fontSize="$sm" fontWeight="$bold">
                          {item?.loanAmount} TK
                        </Text>
                      </VStack>
                    </Box>
                    {/* Paid  */}
                    <Box
                      py="$1"
                      px="$4"
                      bg="$coolGray100"
                      rounded="$md"
                      alignItems="center"
                      justifyContent="center"
                      h="$12">
                      <VStack
                        gap="-$1"
                        justifyContent="center"
                        alignItems="center">
                        <Text fontSize="$sm">Paid</Text>
                        <Text fontSize="$sm" fontWeight="$bold">
                          {item?.paidAmount} TK
                        </Text>
                      </VStack>
                    </Box>
                    <Feather name="chevron-right" size={20} color="gray" />
                    <Box p="$1" position="absolute" right={0} top={2}>
                      <Menu
                        placement="bottom"
                        right="$4"
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
                        <MenuItem key="Call Now" textValue="Call Now">
                          {/* <Icon as={GlobeIcon} size="sm" mr="$2" /> */}
                          <MenuItemLabel size="md">Call Now</MenuItemLabel>
                        </MenuItem>
                        {/* <MenuItem key="Send SMS" textValue="Send SMS"> */}
                        {/* PuzzleIcon is imported from 'lucide-react-native' */}
                        {/* <Icon as={PuzzleIcon} size="sm" mr="$2" /> */}
                        {/* <MenuItemLabel size="md">Send SMS</MenuItemLabel> */}
                        {/* </MenuItem> */}

                        <MenuItem
                          onPress={() => {
                            setSelectItem(item);
                            setModal2(!modal2);
                          }}
                          key="Edit"
                          textValue="Edit">
                          {/* <Icon as={SettingsIcon} size="sm" mr="$2" /> */}
                          <MenuItemLabel size="md">Edit</MenuItemLabel>
                        </MenuItem>
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
                        {/* <MenuItem key="Details" textValue="Details"> */}
                        {/* <Icon as={AddIcon} size="sm" mr="$2" /> */}
                        {/* <MenuItemLabel size="md">Details</MenuItemLabel> */}
                        {/* </MenuItem> */}
                        {/* <MenuItem
                          key="Set A Reminder"
                          textValue="Set A Reminder"> */}
                        {/* <Icon as={AddIcon} size="sm" mr="$2" /> */}
                        {/* <MenuItemLabel size="md">
                            Set A Reminder
                          </MenuItemLabel> */}
                        {/* </MenuItem> */}
                      </Menu>
                    </Box>
                  </HStack>
                </TouchableOpacity>
              </VStack>
            ))
          ) : (
            <Box justifyContent="center" alignItems="center">
              <Text color="$coolGray400" fontWeight="$bold" size="md">
                No found any loan
              </Text>
            </Box>
          )}
        </ScrollView>
        <CommonWriteBox
          icon={<FontAwesome name="fax" color="white" size={30} />}
          title="Total Loan"
          amount={`${loanAllData.reduce((a, b) => b.loanAmount + a, 0)}`}
          btTitle="Add People"
          modal={modal}
          setModal={setModal}
        />

        <CustomModal
          modalVisible={modal}
          setModalVisible={setModal}
          Radius={20}
          height={400}
          width="90%"
          appearance={true}
          backButton={true}
          // backButtonTitle="Modal Open hoise"
        >
          <>
            <Box my="$2" justifyContent="center" alignItems="center">
              <Image w={60} h={60} m={'auto'} source={addUser} alt="savings" />
            </Box>
            <ScrollView>
              <Box>
                <VStack px="$1" gap="$4" mt="$3">
                  <Input rounded="$lg">
                    <InputField
                      placeholder="Full Name"
                      onChangeText={text =>
                        setLoanData({...loanData, fullName: text})
                      }
                    />
                  </Input>
                  <Input rounded="$lg">
                    <InputField
                      placeholder="Phone Number"
                      onChangeText={text =>
                        setLoanData({...loanData, phone: Number(text)})
                      }
                    />
                  </Input>
                  <Input rounded="$lg">
                    <InputField
                      placeholder="Address"
                      onChangeText={text =>
                        setLoanData({...loanData, address: text})
                      }
                    />
                  </Input>
                  <Input rounded="$lg">
                    <InputField
                      placeholder="Amount"
                      onChangeText={text =>
                        setLoanData({...loanData, loanAmount: Number(text)})
                      }
                    />
                  </Input>

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
                backgroundColor="#4849BF"
                action="positive"
                w="45%"
                onPress={() => {
                  handleSaveloanData();
                  setModal(!modal);
                }}>
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
        {/* update loan modal  */}
        {selectItem && (
          <CustomModal
            modalVisible={modal2}
            setModalVisible={setModal2}
            Radius={20}
            height={400}
            width="90%"
            appearance={true}
            backButton={true}
            // backButtonTitle="Modal Open hoise"
          >
            <>
              <Box my="$2" justifyContent="center" alignItems="center">
                <Image
                  w={60}
                  h={60}
                  m={'auto'}
                  source={addUser}
                  alt="savings"
                />
              </Box>
              <ScrollView>
                <Box>
                  <VStack px="$1" gap="$4" mt="$3">
                    <Input rounded="$lg">
                      <InputField
                        placeholder="Full Name"
                        value={loanData?.fullName}
                        onChangeText={text =>
                          setLoanData({...loanData, fullName: text})
                        }
                      />
                    </Input>
                    <Input rounded="$lg">
                      <InputField
                        placeholder="Phone Number"
                        value={`${loanData?.phone}`}
                        onChangeText={text =>
                          setLoanData({...loanData, phone: Number(text)})
                        }
                      />
                    </Input>
                    <Input rounded="$lg">
                      <InputField
                        placeholder="Address"
                        value={loanData?.address}
                        onChangeText={text =>
                          setLoanData({...loanData, address: text})
                        }
                      />
                    </Input>
                    <Input rounded="$lg">
                      <InputField
                        placeholder="Amount"
                        value={`${loanData?.loanAmount}`}
                        onChangeText={text =>
                          setLoanData({...loanData, loanAmount: Number(text)})
                        }
                      />
                    </Input>

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
                  backgroundColor="#4849BF"
                  action="positive"
                  w="45%"
                  onPress={() => {
                    handleUpdateloanData();
                    setModal2(!modal2);
                  }}>
                  <ButtonIcon as={AddIcon} size="xl" />
                  <ButtonText px="$2" fontSize={18} fontWeight="400">
                    ADD
                  </ButtonText>
                </Button>
                <Button
                  backgroundColor="#6f6fd9"
                  w="45%"
                  action="negative"
                  onPress={() => setModal2(false)}>
                  <ButtonIcon as={CloseIcon} size="xl" />
                  <ButtonText px="$2" fontSize={18} fontWeight="400">
                    Cancel
                  </ButtonText>
                </Button>
              </HStack>
            </>
          </CustomModal>
        )}
      </Box>
    </GlueStackProvider>
  );
};

export default LoanMainScreen;
