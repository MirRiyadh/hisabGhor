import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Box, Center, HStack, Text, VStack, View} from '@gluestack-ui/themed';
import {globalStyle} from '../../styles/GlobalStyle';
import Feather from 'react-native-vector-icons/Feather';

type CommonWriteBoxProps = {
  icon: JSX.Element;
  title: string;
  amount: string;
  btTitle: string;
  modal: boolean;
  setModal?: Function | any;
};

const CommonWriteBox = ({
  icon,
  title,
  amount,
  btTitle,
  setModal,
  modal,
}: CommonWriteBoxProps) => {
  return (
    <Box mx="$4" my="$5">
      <HStack justifyContent="space-between" alignItems="center">
        <HStack gap="$3" alignItems="center">
          <Center
            w="$12"
            h="$12"
            style={{
              backgroundColor: globalStyle.primary,
            }}
            // rounded="$md"
          >
            {icon}
          </Center>
          <VStack justifyContent="center" gap="$1">
            <Text fontSize={14}>{title}</Text>
            <Text fontSize={18} color="$coolGray600" fontWeight="$extrabold">
              ${amount}
            </Text>
          </VStack>
        </HStack>
        <TouchableOpacity onPress={() => setModal(!modal)}>
          <HStack
            style={{
              backgroundColor: globalStyle.primary,
              width: 150,
            }}
            h="$12"
            borderTopLeftRadius={10}
            borderBottomRightRadius={10}
            px="$3"
            alignItems="center"
            gap="$2">
            <Feather name="plus" color="white" size={25} />
            <Text color="$white" fontSize={15}>
              {btTitle}
            </Text>
          </HStack>
        </TouchableOpacity>
      </HStack>
    </Box>
  );
};

export default CommonWriteBox;
