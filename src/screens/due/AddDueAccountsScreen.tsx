import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
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
import {RegisteredUser} from '../../../database/controllers/user.controllers';
import { Image } from '@gluestack-ui/themed';

const AddDueAccountsScreen = ({navigation}: any) => {
  const [searchText, setSearchText] = useState();
  const [modal, setModal] = useState(false);

  const [dueData, setDueData] = useState({
    fullName:"",
    phone:0,
    address: "",
    amount: 0,
    reason: "",
    date: new Date()
  });

  console.log("Due Data",dueData);
  

  return (
    <GlueStackProvider>
      <Box h={'100%'}>
        <CommonHeaderPlusBack
          isBack={true}
          title={'Due Estimation'}
          isSearch={true}
          setSearchText={setSearchText}
          searchText={searchText}
        />
        <CommonDateFilter />
        <ScrollView>
          <VStack>
            <TouchableOpacity onPress={() => navigation.navigate('DueDetails')}>
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
                  <Text fontSize="$sm">Arif Biswas</Text>
                  <Text fontSize="$sm">01734431369</Text>
                  <Text fontSize="$sm">Jatra bari, dhaka</Text>
                </VStack>
                {/* due  */}
                <Box
                  py="$1"
                  px="$4"
                  bg="$coolGray100"
                  rounded="$md"
                  alignItems="center"
                  justifyContent="center"
                  h="$12">
                  <VStack gap="-$1" justifyContent="center" alignItems="center">
                    <Text fontSize="$sm">Due</Text>
                    <Text fontSize="$sm" fontWeight="$bold">
                      $5000
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
                  <VStack gap="-$1" justifyContent="center" alignItems="center">
                    <Text fontSize="$sm">Paid</Text>
                    <Text fontSize="$sm" fontWeight="$bold">
                      $500
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
                    <MenuItem key="Send SMS" textValue="Send SMS">
                      {/* PuzzleIcon is imported from 'lucide-react-native' */}
                      {/* <Icon as={PuzzleIcon} size="sm" mr="$2" /> */}
                      <MenuItemLabel size="md">Send SMS</MenuItemLabel>
                    </MenuItem>

                    <MenuItem key="Edit" textValue="Edit">
                      {/* <Icon as={SettingsIcon} size="sm" mr="$2" /> */}
                      <MenuItemLabel size="md">Edit</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Delete" textValue="Delete">
                      {/* <Icon as={AddIcon} size="sm" mr="$2" /> */}
                      <MenuItemLabel size="md">Delete</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Details" textValue="Details">
                      {/* <Icon as={AddIcon} size="sm" mr="$2" /> */}
                      <MenuItemLabel size="md">Details</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Set A Reminder" textValue="Set A Reminder">
                      {/* <Icon as={AddIcon} size="sm" mr="$2" /> */}
                      <MenuItemLabel size="md">Set A Reminder</MenuItemLabel>
                    </MenuItem>
                  </Menu>
                </Box>
              </HStack>
            </TouchableOpacity>
          </VStack>
        </ScrollView>
        <CommonWriteBox
          icon={<FontAwesome name="fax" color="white" size={30} />}
          title="Total Deu"
          amount="500"
          btTitle="Add People"
          modal={modal}
          setModal={setModal}
        />

        <CustomModal
          modalVisible={modal}
          setModalVisible={setModal}
          Radius={20}
          height={490}
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
              alt="savings"/>
            </Box>
          <ScrollView>
            <Box>
            <VStack px="$1" gap="$4" mt="$3">
              <Input rounded="$lg" >
                <InputField placeholder="Full Name" onChangeText={(text)=>setDueData({...dueData, fullName:text})}/>
              </Input>
              <Input rounded="$lg">
                <InputField placeholder="Phone Number" onChangeText={(text)=>setDueData({...dueData, phone:Number(text)})} />
              </Input>
              <Input rounded="$lg">
                <InputField placeholder="Address" onChangeText={(text)=>setDueData({...dueData, address:text})}/>
              </Input>
              <Input rounded="$lg">
                <InputField placeholder="Amount" onChangeText={(text)=>setDueData({...dueData, amount:Number(text)})}/>
              </Input>
              <Input rounded="$lg">
                <InputField placeholder="Reason" onChangeText={(text)=>setDueData({...dueData, reason:text})}/>
              </Input>
              
              <Input rounded="$lg" w="25%" >
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
                  backgroundColor='#4849BF'
                  action="positive"
                  w="45%"
                  onPress={() =>
                    RegisteredUser({
                      email: 'arifbiswas@gamil.com',
                      name: 'arifbiswas',
                      password: 'lmama',
                    })
                  }>
                  <ButtonIcon as={AddIcon} size="xl"  />
                  <ButtonText px="$2" fontSize={18} fontWeight='400'>ADD</ButtonText>
                </Button>
                <Button
                backgroundColor='#6f6fd9'
                  w="45%"
                  action="negative"
                  onPress={() => setModal(false)}>
                  <ButtonIcon as={CloseIcon} size="xl" />
                  <ButtonText px="$2" fontSize={18} fontWeight='400'>Cancel</ButtonText>
                </Button>
          </HStack>
          </>
          
          
        </CustomModal>
      </Box>
    </GlueStackProvider>
  );
};

export default AddDueAccountsScreen;
