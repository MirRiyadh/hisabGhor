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
import {ISavings} from '../../../database/interface/interface';
import {useQuery, useRealm} from '../../../database/realm/realm';
import {addNewSerial} from '../../../database/realm/serial';

const SavingsScreen = ({navigation}: any) => {
  const savingsAllData = useQuery<ISavings>('Savings');
  // console.log(savingsAllData);
  const realm = useRealm();
  const [searchText, setSearchText] = useState();
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [selectItem, setSelectItem] = useState(null);

  const [savingsData, setSavingsData] = useState({
    serial: 1,
    savingsAmount: 0,
    paidAmount: 0,
    title: '',
    phone: '',
  });

  // console.log(addNewSerial(SavingsAllData));

  const handleSaveSavingsData = React.useCallback(async () => {
    if (savingsAllData.length !== 0) {
      savingsData.serial = addNewSerial(savingsAllData);
    }
    console.log(savingsData);
    realm.write(() => {
      realm.create('Savings', {
        ...savingsData,
      });
    });
  }, [savingsData]);

  const handleUpdateSavingsData = React.useCallback(async () => {
    savingsData._id = selectItem._id;
    savingsData.serial = selectItem.serial;

    if (!savingsData.address) {
      savingsData.address = selectItem.address;
    }
    if (!savingsData.savingsAmount) {
      savingsData.savingsAmount = selectItem.savingsAmount;
    }
    if (!savingsData.title) {
      savingsData.title = selectItem.title;
    }
    if (!savingsData.phone) {
      savingsData.phone = selectItem.phone;
    }

    const findItem = realm.objectForPrimaryKey('Savings', selectItem._id);
    realm.write(() => {
      findItem.address = savingsData.address;
      findItem.savingsAmount = savingsData.savingsAmount;
      findItem.title = savingsData.title;
      findItem.phone = savingsData.phone;
    });
    setSelectItem(null);
  }, [savingsData]);

  // console.log('Savings Data', SavingsData);

  useEffect(() => {
    if (selectItem) {
      setSavingsData({
        address: selectItem?.address,
        savingsAmount: selectItem?.savingsAmount,
        paidAmount: selectItem?.paidAmount,
        title: selectItem?.title,
        phone: selectItem?.phone,
      });
    }
  }, [selectItem]);

  return (
    <GlueStackProvider>
      <Box h={'100%'}>
        <CommonHeaderPlusBack
          isBack={true}
          title={'Savingss'}
          isSearch={true}
          setSearchText={setSearchText}
          searchText={searchText}
        />
        <CommonDateFilter />
        <ScrollView>
          {savingsAllData.length !== 0 ? (
            savingsAllData.map(item => (
              <VStack key={item?._id.toHexString()}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('savings_history', {item})
                  }>
                  <HStack
                    justifyContent="space-between"
                    alignItems="center"
                    mx="$2"
                    p="$2"
                    borderColor="$coolGray200"
                    borderWidth="$1"
                    position="relative">
                    {/* user / avater  */}
                    {/* create avatar square  */}
                    <Avatar
                      style={{
                        backgroundColor: globalStyle.primary,
                      }}
                      size="lg"
                      borderRadius="$full">
                      <FontAwesome name="bank" size={45} color="white" />
                    </Avatar>

                    {/* cost info  */}
                    <VStack gap="-$0.5">
                      <Text fontSize="$sm">
                        {item.serial}. {item?.title}
                      </Text>
                      <Text fontSize="$sm">{item?.phone}</Text>
                      <Text fontSize="$sm">
                        {new Date(item?.date).toLocaleDateString()}
                      </Text>
                    </VStack>
                    {/* Savings  */}
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
                        <Text fontSize="$sm">Savings</Text>
                        <Text fontSize="$sm" fontWeight="$bold">
                          {item?.savingsAmount} TK
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
                No found any Savings
              </Text>
            </Box>
          )}
        </ScrollView>
        <CommonWriteBox
          icon={<FontAwesome name="fax" color="white" size={30} />}
          title="Total Savings"
          amount={`${savingsAllData.reduce((a, b) => b.savingsAmount + a, 0)}`}
          btTitle="Add People"
          modal={modal}
          setModal={setModal}
        />

        <CustomModal
          modalVisible={modal}
          setModalVisible={setModal}
          Radius={20}
          height={350}
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
                      placeholder="Title"
                      onChangeText={text =>
                        setSavingsData({...savingsData, title: text})
                      }
                    />
                  </Input>
                  <Input rounded="$lg">
                    <InputField
                      placeholder="Phone Number"
                      onChangeText={text =>
                        setSavingsData({...savingsData, phone: Number(text)})
                      }
                    />
                  </Input>
                  {/* <Input rounded="$lg">
                    <InputField
                      placeholder="Address"
                      onChangeText={text =>
                        setSavingsData({...savingsData, address: text})
                      }
                    />
                  </Input> */}
                  <Input rounded="$lg">
                    <InputField
                      placeholder="Amount"
                      onChangeText={text =>
                        setSavingsData({
                          ...savingsData,
                          savingsAmount: Number(text),
                        })
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
                  handleSaveSavingsData();
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
        {/* update Savings modal  */}
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
                        value={savingsData?.title}
                        onChangeText={text =>
                          setSavingsData({...savingsData, title: text})
                        }
                      />
                    </Input>
                    <Input rounded="$lg">
                      <InputField
                        placeholder="Phone Number"
                        value={`${savingsData?.phone}`}
                        onChangeText={text =>
                          setSavingsData({...savingsData, phone: Number(text)})
                        }
                      />
                    </Input>
                    <Input rounded="$lg">
                      <InputField
                        placeholder="Address"
                        value={savingsData?.address}
                        onChangeText={text =>
                          setSavingsData({...savingsData, address: text})
                        }
                      />
                    </Input>
                    <Input rounded="$lg">
                      <InputField
                        placeholder="Amount"
                        value={`${savingsData?.savingsAmount}`}
                        onChangeText={text =>
                          setSavingsData({
                            ...savingsData,
                            savingsAmount: Number(text),
                          })
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
                    handleUpdateSavingsData();
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

export default SavingsScreen;
