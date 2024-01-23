const cash = require('../../../assets/icons/cash-withdrawal.png');
const history = require('../../../assets/icons/file.png');
const money = require('../../../assets/icons/money-black.png');
const savingIcon = require('../../../assets/icons/budget.png');

import { View } from 'react-native'
import React, { useState } from 'react'
import CommonWriteBox from '../../custom/commonWriteBox/CommonWriteBox'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GlueStackProvider from '../../gluestack_config/gluestackProvider';
import { Text, Box, Button, ButtonIcon, Divider, HStack, Input, ScrollView, VStack, Image, MenuItemLabel, AddIcon, CloseIcon, } from '@gluestack-ui/themed';
import CommonHeaderPlusBack from '../../custom/commonHeader/CommonHeaderPlusBack';
import CommonDateFilter from '../../custom/dateFilter/commonDateFilter';
import { InputField } from '@gluestack-ui/themed';
import { RegisteredUser } from '../../../database/controllers/user.controllers';
import { ButtonText } from '@gluestack-ui/themed';
import CustomModal from '../../custom/customModal/CustomModal';
import { TouchableOpacity } from 'react-native';
import { Menu } from '@gluestack-ui/themed';
import { MenuItem } from '@gluestack-ui/themed';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LoanMainScreen = ({navigation}: any) => {
  const [searchText, setSearchText] = useState('');
  const [modal, setModal] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

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
      <Box height={"100%"} justifyContent='space-between'>
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
         <TouchableOpacity key={data.id} onPress={() => navigation.navigate('loans-history')}>
           <Box
              key={i}
              borderWidth={1}
              borderColor="$#DDDDDD"
              py={7}
              px={20}
              borderRadius={5}
              mb={14}
              >
              <Box flexDirection="row" justifyContent="flex-end">
                {/* _____________3 dots icon___________________ */}
                
                <Menu
                  placement="bottom" 
                  trigger={({ ...triggerProps }) => {
                  return (
                  <TouchableOpacity {...triggerProps}>
                          <AntDesign
                            name="ellipsis1"
                            size={20}
                            color="black"
                          />
                  </TouchableOpacity>

            );
          }}
        >
          <MenuItem key="Community" textValue="Community" >
          <Text>
                <AntDesign name="star" color="black" size={14} />
                </Text>
              <MenuItemLabel size='sm' ml={5}>
                Edit
              </MenuItemLabel>
          </MenuItem>
          <MenuItem key="Plugins" textValue="Plugins">
              {/* PuzzleIcon is imported from 'lucide-react-native' */}
              {/* <Icon as={PuzzleIcon} size="sm" mr='$2'/> */}
              <MenuItemLabel size='sm'>
                Delete
              </MenuItemLabel>
          </MenuItem>
          <MenuItem key="Theme" textValue="Theme">
              {/* PaintBucket is imported from 'lucide-react-native' */}
              {/* <Icon as={PaintBucket} size="sm" mr='$2'/> */}
              <MenuItemLabel size='sm'>
                Add A Pin
              </MenuItemLabel>
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
                      source={savingIcon}
                      alt="lol"
                    />
                  </Box>
                  <Box>
                    <Text fontWeight='$bold' fontSize={20} color='black'>$10500</Text>
                    <Text>Family</Text>
                    <Text fontSize={12}>23 Mar, 23- 12.00 PM</Text>
                  </Box>
                </Box>

                {/* ------------price content box----------------- */}
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
                {/* ------------arrow content box----------------- */}
                <Box>
                  <Text> <AntDesign name="right" color="black" size={16} /> </Text>
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
          height={345}
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
                <InputField placeholder="Sector Name" />
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

      <CommonWriteBox
          icon={<FontAwesome name="fax" color="white" size={20} />}
          title="Total"
          amount="100500"
          btTitle="Add Budget"
          modal={modal}
          setModal={setModal}
         />
      </Box>
      
    </GlueStackProvider>
  )
}

export default LoanMainScreen;