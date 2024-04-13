import React, {useContext, useState} from 'react';
import GlueStackProvider from '../../gluestack_config/gluestackProvider';
import {
  Box,
  HStack,
  Icon,
  Image,
  Switch,
  View,
  Pressable,
  Text,
  VStack,
  Heading,
  Select,
  SelectTrigger,
  SelectInput,
  ChevronDownIcon,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  ScrollView,
} from '@gluestack-ui/themed';
import {AnimatedView} from '@gluestack-style/animation-resolver';
import {styled} from '@gluestack-style/react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const AnimatedBox = styled(AnimatedView, {
  ':initial': {
    opacity: 0,
  },
  ':animate': {
    opacity: 1,
  },
  ':exit': {
    opacity: 0,
  },
});
import {ContextProvider, IStore} from '../../context/ContextApi';
import {globalStyle} from '../../styles/GlobalStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';
import {Divider} from '@gluestack-ui/themed';

// Icons
const menuIcon = require('../../../assets/icons/white-dots.png');
const lolo = require('../../../assets/icons/cash-withdrawal.png');
const dueIcon = require('../../../assets/icons/alms.png');
const savingIcon = require('../../../assets/icons/save-money-2.png');
const debtIcon = require('../../../assets/icons/money-bag.png');
const budgetIcon = require('../../../assets/icons/budget.png');
const spentIcon = require('../../../assets/icons/save-money-2.png');
const incomeIcon = require('../../../assets/icons/save-money1.png');
import {useQuery, useRealm} from '../../../database/realm/realm';
import {IDue, ILoan, ISavings} from '../../../database/interface/interface';

export default function Home({navigation}: any) {
  // const navigation = useNavigation();
  const savingsAllData = useQuery<ISavings>('Savings');
  const loanAllData = useQuery<ILoan>('Loan');
  const dueAllData = useQuery<IDue>('Due');
  // DB.close();
  const XStore: any = useContext(ContextProvider);

  const [modal, setModal] = useState(false);
  const [savingsData, setSavingsData] = useState({
    serial: 1,
    incomeAmount: 0,
    spentAmount: 0,
    title: '',
    phone: '',
  });

  return (
    <GlueStackProvider>
      <Box height={'100%'}>
        <Box
          height={265}
          // bg={'$blue900'}
          softShadow="1"
          px="$6"
          style={{
            backgroundColor: globalStyle.primary,
          }}
          py={'$4'}
          borderBottomStartRadius={20}
          borderBottomEndRadius={20}>
          {/*-----------------------------------------------
                     Header buttons and options part  
           -----------------------------------------------*/}
          <HStack justifyContent="space-between" alignItems="center">
            {/*--------------- left-------------  */}
            {/* <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image w={20} h={20} source={menuIcon} alt="lol" /> */}
            {/* <Image w={40} h={40} source={dueIcon} alt="lol" /> */}
            {/* </TouchableOpacity> */}
            {/*----------------- Right ----------------- */}
            <HStack gap={20} alignItems="center">
              {/* <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <MaterialCommunityIcons
                  name="calculator-variant"
                  size={22}
                  color={'white'}
                />
              </TouchableOpacity> */}
              {/* <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <SimpleLineIcons name="notebook" size={19} color={'white'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Ionicons name="notifications" size={22} color={'white'} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Ionicons name="share-outline" size={22} color={'white'} />
              </TouchableOpacity> */}

              {/* <TouchableOpacity
                onPress={() => {
                  if (XStore.isDark === 'light') {
                    XStore.setIsDark('dark');
                  }
                  if (XStore.isDark === 'dark') {
                    XStore.setIsDark('light');
                  }
                }}>
                {XStore.isDark === 'light' && (
                  <AnimatedBox>
                    <Feather name="sun" size={22} color="white" />
                  </AnimatedBox>
                )}
                {XStore.isDark === 'dark' && (
                  <AnimatedBox>
                    <Feather name="moon" size={22} color="white" />
                  </AnimatedBox>
                )}
              </TouchableOpacity> */}
            </HStack>
          </HStack>

          {/*----------------------------------------------
                    Name, Balance and Info Top Section
            --------------- ------------------------------*/}
          <VStack gap={5}>
            {/*------------ naming part ---------- */}
            <Box mt={10}>
              <Text fontSize={14} color="$white">
                Welcome Back
              </Text>
              <Heading color="$white" size="2xl">
                Mir Riyadh Ali
              </Heading>
            </Box>
            {/*-------------- info ------------ */}
            <Box>
              <HStack
                space="md"
                justifyContent="space-between"
                alignItems="center">
                <View mt={15} gap={10}>
                  <Text fontSize={15} color="$white" fontWeight="$semibold">
                    Current Balance
                  </Text>
                  <Heading color="$white" fontSize={32} size="2xl">
                    $ 100000
                  </Heading>
                </View>
                <Box h="100%" alignItems="flex-end" flexDirection="row">
                  <Divider orientation="vertical" mx="$2.5" bg="white" h={30} />
                </Box>
                <View mt={15} gap={10}>
                  <Text fontSize={15} color="$white" fontWeight="$semibold">
                    Spent This Month
                  </Text>
                  <Heading color="$white" fontSize={32} size="2xl">
                    $ 100000
                  </Heading>
                </View>
              </HStack>

              <Divider mt={10} my="$0.5" />
              <HStack justifyContent="space-between" py="$2">
                <View alignItems="center" w={'30%'}>
                  <Text color="$white" fontSize={16} fontWeight="$semibold">
                    Savings
                  </Text>
                  <Text color="$white" fontSize={16} fontWeight="$bold">
                    ${savingsAllData.reduce((a, b) => b.savingsAmount + a, 0)}
                  </Text>
                </View>
                <Divider mt={10} my="$0.5" orientation="vertical" />
                <View alignItems="center" w={'30%'}>
                  <Text color="$white" fontSize={16} fontWeight="$semibold">
                    Debt
                  </Text>
                  <Text color="$white" fontSize={16} fontWeight="$bold">
                    ${dueAllData.reduce((a, b) => b.dueAmount + a, 0)}
                  </Text>
                </View>
                <Divider mt={10} my="$0.5" orientation="vertical" />
                <View alignItems="center" w={'30%'}>
                  <Text color="$white" fontSize={16} fontWeight="$semibold">
                    Due
                  </Text>
                  <Text color="$white" fontSize={16} fontWeight="$bold">
                    ${loanAllData.reduce((a, b) => b.loanAmount + a, 0)}
                  </Text>
                </View>
              </HStack>
            </Box>
          </VStack>
        </Box>
        {/*----------------------------------------------
                      Options / Middle Section 
        ----------------------------------------------- */}
        <ScrollView pt="$5">
          <HStack mx={'4%'} justifyContent="space-between">
            <TouchableOpacity onPress={() => navigation.navigate('Due')}>
              <Box
                style={{
                  backgroundColor: globalStyle.primary,
                }}
                w={70}
                h={70}
                softShadow="1"
                borderRadius={10}
                justifyContent="center"
                alignItems="center">
                {/* <FontAwesome5
                  name="hand-holding-usd"
                  size={40}
                  color={'white'}
                /> */}
                <Image w={40} h={40} source={dueIcon} alt="lol" />
              </Box>
              <Text
                textAlign="center"
                fontSize="$xs"
                fontWeight="$semibold"
                color={XStore.isDark === 'dark' ? '$black' : '$coolGray300'}>
                Due
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('loans')}>
              <Box
                style={{
                  backgroundColor: globalStyle.primary,
                }}
                w={70}
                h={70}
                softShadow="1"
                borderRadius={10}
                justifyContent="center"
                alignItems="center">
                {/* <FontAwesome5
                  name="hand-holding-usd"
                  size={40}
                  color={'white'}
                /> */}
                <Image w={38} h={38} source={debtIcon} alt="lol" />
              </Box>
              <Text
                textAlign="center"
                fontSize="$xs"
                fontWeight="$semibold"
                color={XStore.isDark === 'dark' ? '$black' : '$coolGray300'}>
                Loan
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Savings')}>
              <Box
                style={{
                  backgroundColor: globalStyle.primary,
                }}
                w={70}
                h={70}
                softShadow="1"
                borderRadius={10}
                justifyContent="center"
                alignItems="center">
                {/* <FontAwesome5
                  name="hand-holding-usd"
                  size={40}
                  color={'white'}
                /> */}
                <Image w={40} h={40} source={savingIcon} alt="lol" />
              </Box>
              <Text
                textAlign="center"
                fontSize="$xs"
                fontWeight="$semibold"
                color={XStore.isDark === 'dark' ? '$black' : '$coolGray300'}>
                Saving's
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('budgets')}>
              <Box
                style={{
                  backgroundColor: globalStyle.primary,
                }}
                w={70}
                h={70}
                softShadow="1"
                borderRadius={10}
                justifyContent="center"
                alignItems="center">
                <Image w={35} h={35} source={budgetIcon} alt="lol" />
              </Box>
              <Text
                textAlign="center"
                fontSize="$xs"
                fontWeight="$semibold"
                color={XStore.isDark === 'dark' ? '$black' : '$coolGray300'}>
                Expense report
              </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => navigation.navigate('budgets')}>
              <Box
                style={{
                  backgroundColor: globalStyle.primary,
                }}
                w={70}
                h={70}
                softShadow="1"
                borderRadius={10}
                justifyContent="center"
                alignItems="center">
              
                <Image w={35} h={35} source={budgetIcon} alt="lol" />
              </Box>
              <Text
                textAlign="center"
                fontSize="$xs"
                fontWeight="$semibold"
                color={XStore.isDark === 'dark' ? '$black' : '$coolGray300'}>
                Budget
              </Text>
            </TouchableOpacity> */}
          </HStack>
          {/* ------------ History and filter ------------- */}
          <Box mx="4%">
            <Divider bgColor="$coolGray300" mt="$5" mb="$2" />
          </Box>
          {/* ----------History and filter Section----------*/}
          <HStack justifyContent="flex-end" mx="4%">
            <Heading
              size="sm"
              color={
                XStore.isDark === 'dark' ? '$coolGray400' : '$coolGray300'
              }>
              History
            </Heading>
          </HStack>

          {/* <Box mx="4%" my="$2">
            <HStack alignItems="center">
              <Text
                pr="$3"
                color={
                  XStore.isDark === 'dark' ? '$coolGray500' : '$coolGray300'
                }
                fontSize="$sm">
                Today
              </Text>
              <Divider
                style={{
                  flex: 1,
                }}
                bgColor="$coolGray300"
              />
            </HStack>
          </Box> */}

          {/* expense or add money history*/}
          <VStack gap="$5" mx="4%" mb="$10">
            <HStack justifyContent="space-between" alignItems="center">
              <HStack gap="$2">
                <View
                  w={50}
                  h={50}
                  backgroundColor="$coolGray200"
                  p="$1"
                  borderRadius="$xl"
                  softShadow="1"
                  justifyContent="center"
                  alignItems="center">
                  <Image w={30} h={30} source={lolo} alt="lol" />
                </View>
                <VStack justifyContent="space-between">
                  <Text
                    color={
                      XStore.isDark === 'dark' ? '$coolGray700' : '$coolGray300'
                    }>
                    Bank
                  </Text>
                  <HStack gap="$3">
                    <Text
                      color={
                        XStore.isDark === 'dark'
                          ? '$coolGray700'
                          : '$coolGray300'
                      }>
                      15 Dec
                    </Text>
                    <Text
                      color={
                        XStore.isDark === 'dark'
                          ? '$coolGray700'
                          : '$coolGray300'
                      }>
                      8:00 pm
                    </Text>
                  </HStack>
                </VStack>
              </HStack>
              <Text
                style={{
                  flex: 1,
                }}
                textAlign="right"
                color="$red600">
                - $50
              </Text>
            </HStack>
            <HStack justifyContent="space-between" alignItems="center">
              <HStack gap="$2">
                <View
                  w={50}
                  h={50}
                  backgroundColor="$coolGray200"
                  p="$1"
                  borderRadius="$xl"
                  softShadow="1"
                  justifyContent="center"
                  alignItems="center">
                  <Image w={30} h={30} source={lolo} alt="lol" />
                </View>
                <VStack justifyContent="space-between">
                  <Text
                    color={
                      XStore.isDark === 'dark' ? '$coolGray700' : '$coolGray300'
                    }>
                    Bank
                  </Text>
                  <HStack gap="$3">
                    <Text
                      color={
                        XStore.isDark === 'dark'
                          ? '$coolGray700'
                          : '$coolGray300'
                      }>
                      15 Dec
                    </Text>
                    <Text
                      color={
                        XStore.isDark === 'dark'
                          ? '$coolGray700'
                          : '$coolGray300'
                      }>
                      8:00 pm
                    </Text>
                  </HStack>
                </VStack>
              </HStack>
              <Text
                style={{
                  flex: 1,
                }}
                textAlign="right"
                color="$green600">
                - $50
              </Text>
            </HStack>
          </VStack>
        </ScrollView>
        {/* ============================================= 
        Start Here and your part
        is down part money increment and decrement 
        ================================================ */}
        {/*==============================================
                  Now start of  Bottom part  
         ================================================
         */}
        <Box
          borderTopLeftRadius="$3xl"
          borderTopRightRadius="$3xl"
          // bg="$coolGray900"
        >
          <Box mx={'5%'}>
            <Box>
              <Divider bgColor="$coolGray300" mt="$5" mb="$1" />
            </Box>
            <HStack py="$2" justifyContent="space-between">
              <HStack gap="$4" justifyContent="center">
                <TouchableOpacity>
                  <View
                    w="$12"
                    h="$12"
                    rounded="$md"
                    bg="$red500"
                    alignItems="center"
                    justifyContent="center">
                    <Feather name="minus" color="white" size={25} />
                  </View>
                </TouchableOpacity>
                <VStack gap={1}>
                  <Text color="$red500" textAlign="right">
                    - $500
                  </Text>
                  <Text textAlign="right">Total Spent</Text>
                </VStack>
              </HStack>
              <HStack gap="$4" justifyContent="center">
                <VStack gap={1}>
                  <Text color="$green500" fontWeight="$bold">
                    $500
                  </Text>
                  <Text>Total Income</Text>
                </VStack>
                <TouchableOpacity>
                  <View
                    w="$12"
                    h="$12"
                    rounded="$md"
                    bg="$green500"
                    alignItems="center"
                    justifyContent="center">
                    <Feather name="plus" color="white" size={25} />
                  </View>
                </TouchableOpacity>
              </HStack>
            </HStack>
            {/* <HStack justifyContent="space-between" my="$3">
              <TouchableOpacity
                style={{
                  width: '48%',
                }}>
                <View
                  py="$3"
                  rounded="$md"
                  style={{backgroundColor: globalStyle.primary}}>
                  <Text color="$coolGray100" fontSize="$lg" textAlign="center">
                    + Add Money
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: '48%',
                }}>
                <View
                  py="$3"
                  rounded="$md"
                  style={{backgroundColor: globalStyle.primary}}>
                  <Text color="$coolGray100" fontSize="$lg" textAlign="center">
                    - Spent Money
                  </Text>
                </View>
              </TouchableOpacity>
            </HStack> */}
          </Box>
        </Box>
      </Box>
    </GlueStackProvider>
  );
}
