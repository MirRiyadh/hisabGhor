import {View} from 'react-native';
import React, {useState} from 'react';
import {Text, Box, Image, Button, ButtonText, MenuItem, Icon, MenuItemLabel} from '@gluestack-ui/themed';
import GlueStackProvider from '../../gluestack_config/gluestackProvider';
import CommonHeaderPlusBack from '../../custom/commonHeader/CommonHeaderPlusBack';
const savingIcon = require('../../../assets/icons/budget.png');
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Menu } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import CommonWriteBox from '../../custom/commonWriteBox/CommonWriteBox';
import CustomModal from '../../custom/customModal/CustomModal';
import CommonDateFilter from '../../custom/dateFilter/commonDateFilter';


const SavingsScreen = ({navigation}: any) => {
  const [searchText, setSearchText] = useState('');
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
      <Box height={'100%'} justifyContent='space-between'>
      <CommonHeaderPlusBack
        isBack={true}
        title="Savings"
        isSearch={true}
        searchText={searchText}
        setSearchText={setSearchText}
      />
      <CommonDateFilter />
      
      <Box  px={20} my={10} >
        <Box>
          {datas.map((data, i) => {
          return (
         <TouchableOpacity key={data.id} onPress={() => navigation.navigate('Savings-History')}>
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
                    <Text>
                      Mobile-Bkash
                    </Text>
                    <Text>01734431369</Text>
                    <Text>23 Mar, 23- 12.00 PM</Text>
                  </Box>
                </Box>

                {/* ------------price content box----------------- */}
                <Box>
                  <Text>10000$</Text>
                </Box>
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
          height="80%"
          width="90%"
          appearance={true}
          backButton={true}
          // backButtonTitle="Modal Open hoise"
         >
          <Box>
            <Text>Savings</Text>
          </Box>
        </CustomModal>
        </Box>
           
      </Box>

      
          <CommonWriteBox
          icon={<AntDesign name="star" color="white" size={35} />}
          title="Total Savings"
          amount="1500"
          btTitle="Add People"
          modal={modal}
          setModal={setModal}
        />
        
      </Box>
      
      
    </GlueStackProvider>
  );
};

export default SavingsScreen;
