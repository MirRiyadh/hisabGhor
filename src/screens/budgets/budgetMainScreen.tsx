const addBudgetIcon = require('../../../assets/icons/add.png');
const savingIcon = require('../../../assets/icons/budget.png');

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

const BudgetMainScreen = ({navigation}: any) => {
  const [searchText, setSearchText] = useState('');
  const [modal, setModal] = useState(false);

  const [budgetData, setBudgetData] = useState({
    sectorName: '',
    amount: 0,
    reason: '',
    date: new Date(),
  });

  console.log(budgetData);

  const datas = [
    {
      id: '1',
      img: '',
      title: '',
      number: '',
      date: '',
      amount: '',
    },
    {id: '2', img: '', title: '', number: '', date: '', amount: ''},
  ];
  return (
    <GlueStackProvider>
      <Box height={'100%'} justifyContent="space-between">
        <Box>
          <CommonHeaderPlusBack
            isBack={true}
            title="Budget"
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
                  onPress={() => navigation.navigate('budgets-list')}>
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
                          w={45}
                          h={45}
                          borderRadius={50}
                          justifyContent="center"
                          alignItems="center">
                          <Image
                            w={25}
                            h={25}
                            m={'auto'}
                            source={savingIcon}
                            alt="lol"
                          />
                        </Box>
                        <Box>
                          <Text>Family</Text>
                          <Text fontSize={12}>23 Mar, 23- 12.00 PM</Text>
                        </Box>
                      </Box>

                      {/* ------------price content box----------------- */}
                      <Box>
                        <Text fontWeight="$bold" fontSize={20} color="#01A542">
                          10000$
                        </Text>
                      </Box>
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
                    source={addBudgetIcon}
                    alt="savings"
                  />
                </Box>
                <ScrollView>
                  <Box>
                    <VStack px="$1" gap="$4" mt="$3">
                      <Input rounded="$lg">
                        <InputField
                          placeholder="Sector Name"
                          onChangeText={text =>
                            setBudgetData({...budgetData, sectorName: text})
                          }
                        />
                      </Input>

                      <Input rounded="$lg">
                        <InputField
                          placeholder="Amount"
                          onChangeText={text =>
                            setBudgetData({...budgetData, amount: Number(text)})
                          }
                        />
                      </Input>
                      <Input rounded="$lg">
                        <InputField
                          placeholder="Reason"
                          onChangeText={text =>
                            setBudgetData({...budgetData, reason: text})
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
          icon={<FontAwesome name="fax" color="white" size={30} />}
          title="Total"
          amount="10500"
          btTitle="Add Sector"
          modal={modal}
          setModal={setModal}
        />
      </Box>
    </GlueStackProvider>
  );
};

export default BudgetMainScreen;
