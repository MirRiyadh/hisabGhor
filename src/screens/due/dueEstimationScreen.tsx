import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import GlueStackProvider from '../../gluestack_config/gluestackProvider';
import CommonHeaderPlusBack from '../../custom/commonHeader/CommonHeaderPlusBack';
import CommonWriteBox from '../../custom/commonWriteBox/CommonWriteBox';

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
} from '@gluestack-ui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import CustomModal from '../../custom/customModal/CustomModal';
import {Text} from '@gluestack-ui/themed';
import CommonDateFilter from '../../custom/dateFilter/commonDateFilter';
import {globalStyle} from '../../styles/GlobalStyle';

const DueEstimationScreen = () => {
  const [searchText, setSerachText] = useState();
  const [modal, setModal] = useState(false);
  return (
    <GlueStackProvider>
      <Box h={'100%'}>
        <CommonHeaderPlusBack
          isBack={true}
          title={'Due Estimation'}
          isSearch={true}
          setSearchText={setSerachText}
          searchText={searchText}
        />
        <CommonDateFilter />
        <ScrollView>
          <VStack>
            <TouchableOpacity>
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
                    right="$3"
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
                    <MenuItem key="Community" textValue="Community">
                      <Icon as={GlobeIcon} size="sm" mr="$2" />
                      <MenuItemLabel size="sm">Community</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Plugins" textValue="Plugins">
                      {/* PuzzleIcon is imported from 'lucide-react-native' */}
                      {/* <Icon as={PuzzleIcon} size="sm" mr="$2" /> */}
                      <MenuItemLabel size="sm">Plugins</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Theme" textValue="Theme">
                      {/* PaintBucket is imported from 'lucide-react-native' */}
                      {/* <Icon as={PaintBucket} size="sm" mr="$2" /> */}
                      <MenuItemLabel size="sm">Theme</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Settings" textValue="Settings">
                      <Icon as={SettingsIcon} size="sm" mr="$2" />
                      <MenuItemLabel size="sm">Settings</MenuItemLabel>
                    </MenuItem>
                    <MenuItem key="Add account" textValue="Add account">
                      <Icon as={AddIcon} size="sm" mr="$2" />
                      <MenuItemLabel size="sm">Add account</MenuItemLabel>
                    </MenuItem>
                  </Menu>
                </Box>
              </HStack>
            </TouchableOpacity>
          </VStack>
        </ScrollView>
        <CommonWriteBox
          icon={<FontAwesome name="pencil-square-o" color="white" size={35} />}
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
          height="80%"
          width="90%"
          appearance={true}
          backButton={true}
          // backButtonTitle="Modal Open hoise"
        >
          <Box>
            <Text>Arif</Text>
          </Box>
        </CustomModal>
      </Box>
    </GlueStackProvider>
  );
};

export default DueEstimationScreen;
