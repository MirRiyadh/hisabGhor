const cash = require('../../../assets/icons/cash-withdrawal.png');
const history = require('../../../assets/icons/file.png');
const savingIcon = require('../../../assets/icons/budget.png');
const mainLoanIcon = require('../../../assets/icons/loan3.png');

import {View} from 'react-native';
import React, {useState} from 'react';
import CommonWriteBox from '../../custom/commonWriteBox/CommonWriteBox';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GlueStackProvider from '../../gluestack_config/gluestackProvider';
import {
  Text,
  Box,
  Button,
  ButtonIcon,
  Divider,
  HStack,
  Input,
  ScrollView,
  VStack,
  Image,
  MenuItemLabel,
  AddIcon,
  CloseIcon,
} from '@gluestack-ui/themed';
import CommonHeaderPlusBack from '../../custom/commonHeader/CommonHeaderPlusBack';
import CommonDateFilter from '../../custom/dateFilter/commonDateFilter';
import {InputField} from '@gluestack-ui/themed';

import {ButtonText} from '@gluestack-ui/themed';
import CustomModal from '../../custom/customModal/CustomModal';
import {TouchableOpacity} from 'react-native';
import {Menu} from '@gluestack-ui/themed';
import {MenuItem} from '@gluestack-ui/themed';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LoanMainScreen = ({navigation}: any) => {
  const [searchText, setSearchText] = useState('');
  const [modal, setModal] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const [loanData, setLoanData] = useState({
    title: '',
    amount: 0,
    reason: '',
    date: new Date(),
  });

  console.log(loanData);

  const datas = [
    {
      id: '1',
      img: 'https://i.ibb.co/7YDg6Yb/budget.png',
      title: 'Riyadh',
      amount: '5000',
      number: '017654544544',
      date: '02 Mar,24 12.02PM',
      paid: true,
    },
    {
      id: '2',
      img: 'https://i.ibb.co/7YDg6Yb/budget.png',
      title: 'Arif',
      number: '01794654654',
      date: '21 Feb,24 11.02PM',
      amount: '6000',
      paid: false,
    },
    {
      id: '3',
      img: 'https://i.ibb.co/7YDg6Yb/budget.png',
      title: 'Arif',
      number: '01794654654',
      date: '21 Feb,24 11.02PM',
      amount: '55000',
      paid: false,
    },
    {
      id: '4',
      img: 'https://i.ibb.co/7YDg6Yb/budget.png',
      title: 'Arif',
      number: '01794654654',
      date: '21 Feb,24 11.02PM',
      amount: '55000',
      paid: false,
    },
  ];

  return (
    <GlueStackProvider>
      <Box height={'100%'} justifyContent="space-between">
        <Box>
          <CommonHeaderPlusBack
            isBack={true}
            title="Loan"
            isSearch={true}
            searchText={searchText}
            setSearchText={setSearchText}
          />
          <CommonDateFilter />
          <Box mx="$4" my="$2">
            <Divider />
          </Box>

          <Box px={20} my={7}>
            {datas.map((data, i) => {
              return (
                <TouchableOpacity
                  key={data.id}
                  onPress={() => navigation.navigate('loans-history')}>
                  <Box
                    key={i}
                    borderWidth={1}
                    borderColor="$#DDDDDD"
                    py={7}
                    px={20}
                    borderRadius={5}
                    mb={14}>
                    <Box flexDirection="row" justifyContent="flex-end">
                      {/* _____________3 dots icon___________________ */}

                      <Menu
                        placement="bottom"
                        trigger={({...triggerProps}) => {
                          return (
                            <TouchableOpacity {...triggerProps}>
                              <AntDesign
                                name="ellipsis1"
                                size={20}
                                color="black"
                              />
                            </TouchableOpacity>
                          );
                        }}>
                        <MenuItem key="Community" textValue="Community">
                          <Text>
                            <AntDesign name="star" color="black" size={14} />
                          </Text>
                          <MenuItemLabel size="sm" ml={5}>
                            Edit
                          </MenuItemLabel>
                        </MenuItem>
                        <MenuItem key="Plugins" textValue="Plugins">
                          {/* PuzzleIcon is imported from 'lucide-react-native' */}
                          {/* <Icon as={PuzzleIcon} size="sm" mr='$2'/> */}
                          <MenuItemLabel size="sm">Delete</MenuItemLabel>
                        </MenuItem>
                        <MenuItem key="Theme" textValue="Theme">
                          {/* PaintBucket is imported from 'lucide-react-native' */}
                          {/* <Icon as={PaintBucket} size="sm" mr='$2'/> */}
                          <MenuItemLabel size="sm">Add A Pin</MenuItemLabel>
                        </MenuItem>
                      </Menu>
                    </Box>
                    <Box
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center">
                      {/* ------------image content box----------------- */}
                      <Box flexDirection="row" gap={10}>
                        <Box
                          backgroundColor="$#4849BF"
                          w={60}
                          h={60}
                          borderRadius={50}
                          justifyContent="center"
                          alignItems="center">
                          <Image
                            w={35}
                            h={35}
                            m={'auto'}
                            source={data.img}
                            alt="lol"
                          />
                        </Box>
                        <Box>
                          <Text fontWeight="$bold" fontSize={20} color="black">
                            {data.amount}
                          </Text>
                          <Text>{data.title}</Text>
                          <Text fontSize={12}>{data.date}</Text>
                        </Box>
                      </Box>

                      {/* ------------price content box----------------- */}
                      <TouchableOpacity
                      //   disabled={isPaid}
                      >
                        {data.paid === true ? (
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
                            <Text
                              fontSize="$xs"
                              color="$white"
                              fontWeight="$bold">
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
                            <Text
                              fontSize="$xs"
                              color="$white"
                              fontWeight="$bold">
                              Unpaid
                            </Text>
                          </Box>
                        )}
                      </TouchableOpacity>
                      {/* ------------arrow content box----------------- */}
                      <Box>
                        <Text>
                          {' '}
                          <AntDesign
                            name="right"
                            color="black"
                            size={16}
                          />{' '}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </TouchableOpacity>
              );
            })}

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
                  <Image
                    w={60}
                    h={60}
                    m={'auto'}
                    source={mainLoanIcon}
                    alt="savings"
                  />
                </Box>
                <ScrollView>
                  <Box>
                    <VStack px="$1" gap="$4" mt="$3">
                      <Input rounded="$lg">
                        <InputField
                          placeholder="Title"
                          onChangeText={text =>
                            setLoanData({...loanData, title: text})
                          }
                        />
                      </Input>
                      <Input rounded="$lg">
                        <InputField
                          placeholder="Amount"
                          onChangeText={text =>
                            setLoanData({...loanData, amount: Number(text)})
                          }
                        />
                      </Input>
                      <Input rounded="$lg">
                        <InputField
                          placeholder="Reason"
                          onChangeText={text =>
                            setLoanData({...loanData, reason: text})
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
        </Box>

        <CommonWriteBox
          icon={<FontAwesome name="fax" color="white" size={20} />}
          title="Total"
          amount="10500"
          btTitle="Add Loan"
          modal={modal}
          setModal={setModal}
        />
      </Box>
    </GlueStackProvider>
  );
};

export default LoanMainScreen;
