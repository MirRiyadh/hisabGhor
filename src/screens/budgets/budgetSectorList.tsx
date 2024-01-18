const cash = require('../../../assets/icons/cash-withdrawal.png');
const history = require('../../../assets/icons/file.png');
const money = require('../../../assets/icons/money-black.png');

import { View } from 'react-native'
import React, { useState } from 'react'
import GlueStackProvider from '../../gluestack_config/gluestackProvider';
import CommonHeaderPlusBack from '../../custom/commonHeader/CommonHeaderPlusBack';
import CommonDateFilter from '../../custom/dateFilter/commonDateFilter';
import {Text, Box, MenuItemLabel, MenuItem, Image, Divider, ScrollView,
  VStack, HStack, Input, InputField, ButtonIcon, Button, AddIcon, CloseIcon, ButtonText } from '@gluestack-ui/themed';
import { Menu } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import CommonWriteBox from '../../custom/commonWriteBox/CommonWriteBox';
import CustomModal from '../../custom/customModal/CustomModal';
import { RegisteredUser } from '../../../database/controllers/user.controllers';

const BudgetSectorList = () => {
  const [searchText, setSearchText] = useState('');
  const [isPaid, setIsPaid] = useState(false);
  const [modal, setModal] = useState(false);
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
      <Box height={"100%"}>
      <CommonHeaderPlusBack
        isBack={true}
        title="Bkash Number"
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
            <ScrollView key={data.id}>
            <VStack>
              <Box py={5}>
                <HStack
                  justifyContent="space-between"
                  alignItems="center"
                  mx="$2"
                  p="$2"
                  py="$3"
                  position="relative">
                  {/* user / avater  */}
                  <Box
                    backgroundColor='#ECECEC'
                    h={45}
                    w={45}
                    borderRadius="$md"
                    justifyContent="center"
                    alignItems="center">
                    <Image w={"$7"} h={"$7"} source={money} alt='cash history'/>
                  </Box>
                  {/* cost info  */}
                  <VStack gap="-$1">
                    <Box flexDirection='row' alignContent='center' gap={5}>
                     
                      <Text fontSize={18} fontWeight={'$bold'} >Medicine </Text>
                      <Text>
                        <FontAwesome name="exclamation-circle" size={16} color="red" />
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize={11}>20 Dec, 23 | 10.10 PM</Text>
                    </Box>
                    

                    
                  </VStack>
                  {/* _____________Cash Paid History____________  */}
                  <TouchableOpacity>
                    <Text fontSize={20} fontWeight='$bold' color='#01A542'>$5000</Text>
                  </TouchableOpacity>
  
                  {/* ____________All History______________  */}
                  <TouchableOpacity>
                  <Image w={"$6"} h={"$6"} source={history} alt='cash history'/>
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
                
                      <MenuItem
                        key="Mark As Important"
                        textValue="Mark As Important">
                        {/* PuzzleIcon is imported from 'lucide-react-native' */}
                        {/* <Icon as={PuzzleIcon} size="sm" mr="$2" /> */}
                        <MenuItemLabel size="md">Withdraw</MenuItemLabel>
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
                        <MenuItemLabel size="md">Move</MenuItemLabel>
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

          

            
          );
        })}

       <CommonWriteBox
          icon={<FontAwesome name="fax" color="white" size={30} />}
          title="Total Money"
          amount="500"
          btTitle="Add Savings"
          modal={modal}
          setModal={setModal}
        />

       <CustomModal
          modalVisible={modal}
          setModalVisible={setModal}
          Radius={20}
          height="65%"
          width="90%"
          appearance={true}
          // backButton={true}
          // backButtonTitle="Modal Open hoise"
        >
          <Box>
            <Box my="$2" justifyContent="center" alignItems="center">
              <FontAwesome name="user" size={45} color="gray" />
            </Box>

            <VStack px="$1" gap="$4" mt="$3">
              <Input rounded="$lg">
                <InputField placeholder="Full Name" />
              </Input>
              <Input rounded="$lg">
                <InputField placeholder="Phone Number" />
              </Input>
              <Input rounded="$lg">
                <InputField placeholder="Address" />
              </Input>
              <Input rounded="$lg">
                <InputField placeholder="Amount" />
              </Input>
              <Input rounded="$lg">
                <InputField placeholder="Amount" />
              </Input>
              
              <Input rounded="$lg" w="$20">
                <InputField placeholder="Date" />
              </Input>
              <HStack
                gap="$3"
                justifyContent="space-around"
                alignItems="center"
                mt="$3">
                <Button
                  action="positive"
                  w="40%"
                  onPress={() =>
                    RegisteredUser({
                      email: 'arifbiswas@gamil.com',
                      name: 'arifbiswas',
                      password: 'lolmama',
                    })
                  }>
                  <ButtonIcon as={AddIcon} size="xl" />
                  <ButtonText px="$2">Add</ButtonText>
                </Button>
                <Button
                  w="40%"
                  action="negative"
                  onPress={() => setModal(false)}>
                  <ButtonIcon as={CloseIcon} size="xl" />
                  <ButtonText px="$2">Cancel</ButtonText>
                </Button>
              </HStack>
            </VStack>
          </Box>
        </CustomModal>
      </Box>
      </Box>
     
      
    </GlueStackProvider>
  )
}


export default BudgetSectorList