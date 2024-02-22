import {TouchableOpacity} from 'react-native';
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

const DueAccountsDetailsScreen = () => {
  const [searchText, setSearchText] = useState();
  const [modal, setModal] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const [dueDetailsData, setDueDetailsData] = useState({
    amount: 0,
    paidAmount: 0,
    reason: '',
    date: new Date(),
  });

  console.log('Due Details Data', dueDetailsData);

  return (
    <GlueStackProvider>
      <Box h={'100%'}>
        <CommonHeaderPlusBack
          isBack={true}
          title={'Riyadh Bhai'}
          isSearch={true}
          setSearchText={setSearchText}
          searchText={searchText}
        />
        <CommonDateFilter />
        <Box mx="$4" mb="$1">
          <Divider />
        </Box>
        <ScrollView>
          <VStack>
            <Box>
              <HStack
                justifyContent="space-between"
                alignItems="center"
                mx="$2"
                p="$2"
                py="$3"
                position="relative">
                {/* user / avater  */}
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
                  <Text fontSize="$sm">Reason: Hospital</Text>
                  <Text fontSize="$sm">$700 </Text>
                  <Text fontSize="$sm">20 Dec, 23 | 10.10 PM</Text>
                </VStack>
                {/* due  */}
                <TouchableOpacity
                  //   disabled={isPaid}
                  onPress={() => setIsPaid(!isPaid)}>
                  {isPaid ? (
                    <Box
                      py="$1"
                      px="$2"
                      bg="$success400"
                      rounded="$md"
                      alignItems="center"
                      justifyContent="center"
                      h="$8"
                      style={{
                        width: 60,
                      }}>
                      <Text fontSize="$xs" color="$white" fontWeight="$bold">
                        Paid
                      </Text>
                    </Box>
                  ) : (
                    <Box
                      py="$1"
                      px="$2"
                      bg="$error400"
                      rounded="$md"
                      alignItems="center"
                      justifyContent="center"
                      h="$8"
                      style={{
                        width: 60,
                      }}>
                      <Text fontSize="$xs" color="$white" fontWeight="$bold">
                        Unpaid
                      </Text>
                    </Box>
                  )}
                </TouchableOpacity>

                {/* Paid  */}
                <TouchableOpacity>
                  <FontAwesome name="book" size={20} color="gray" />
                </TouchableOpacity>
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
                    <MenuItem key="Pay Few Money" textValue="Pay Few Money">
                      {/* <Icon as={GlobeIcon} size="sm" mr="$2" /> */}
                      <MenuItemLabel size="md">Pay Few Money</MenuItemLabel>
                    </MenuItem>
                    <MenuItem
                      key="Mark As Important"
                      textValue="Mark As Important">
                      {/* PuzzleIcon is imported from 'lucide-react-native' */}
                      {/* <Icon as={PuzzleIcon} size="sm" mr="$2" /> */}
                      <MenuItemLabel size="md">Mark As Important</MenuItemLabel>
                    </MenuItem>

                    <MenuItem key="Edit" textValue="Edit">
                      {/* <Icon as={SettingsIcon} size="sm" mr="$2" /> */}
                      <MenuItemLabel size="md">Edit</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Delete" textValue="Delete">
                      {/* <Icon as={AddIcon} size="sm" mr="$2" /> */}
                      <MenuItemLabel size="md">Delete</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Set A Deadline" textValue="Set A Deadline">
                      {/* <Icon as={AddIcon} size="sm" mr="$2" /> */}
                      <MenuItemLabel size="md">Set A Deadline</MenuItemLabel>
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
          </VStack>
        </ScrollView>
        <CommonWriteBox
          icon={<FontAwesome name="fax" color="white" size={30} />}
          title="Total Deu"
          amount="500"
          btTitle="Add Due"
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
              <Image w={60} h={60} m={'auto'} source={dueIcon} alt="savings" />
            </Box>
            <ScrollView>
              <Box>
                <VStack px="$1" gap="$4" mt="$3">
                  <Input rounded="$lg">
                    <InputField
                      placeholder="Reason"
                      onChangeText={text =>
                        setDueDetailsData({...dueDetailsData, reason: text})
                      }
                    />
                  </Input>
                  <Input rounded="$lg">
                    <InputField
                      placeholder="Amount"
                      onChangeText={text =>
                        setDueDetailsData({
                          ...dueDetailsData,
                          amount: Number(text),
                        })
                      }
                    />
                  </Input>
                  <Input rounded="$lg">
                    <InputField
                      placeholder="Paid Amount(Optional)"
                      onChangeText={text =>
                        setDueDetailsData({
                          ...dueDetailsData,
                          paidAmount: Number(text),
                        })
                      }
                    />
                  </Input>

                  <Input rounded="$lg" w="25%">
                    <InputField fontSize={16} placeholder="📅 Date" />
                  </Input>
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

export default DueAccountsDetailsScreen;
