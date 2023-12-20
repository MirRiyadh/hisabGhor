import React, {useState} from 'react';
import {Box, HStack, Input, InputField, Text, View} from '@gluestack-ui/themed';
import {globalStyle} from '../../styles/GlobalStyle';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type CommonHeaderProps = {
  isBack: boolean;
  title: string;
  isSearch?: boolean;
  searchText?: string;
  setSearchText?: Function | any;
};

const CommonHeaderPlusBack = ({
  isBack,
  title,
  isSearch,
  setSearchText,
  searchText,
}: CommonHeaderProps) => {
  const [goSearch, setGoSearch] = useState(false);
  const navigation = useNavigation();
  return (
    <Box
      style={{
        backgroundColor: globalStyle.primary,
      }}
      h="$16"
      //   borderBottomRightRadius={10}
      //   borderBottomLeftRadius={10}
      px="$2">
      <HStack alignItems="center" justifyContent="space-between" h="$16">
        {!goSearch && (
          <HStack alignItems="center">
            {isBack && (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View px="$2" py="$2">
                  <Feather name="chevron-left" size={30} color="white" />
                </View>
              </TouchableOpacity>
            )}
            <View px="$2" py="$2">
              <Text color="white" fontSize="$md">
                {title}
              </Text>
            </View>
          </HStack>
        )}
        {goSearch && (
          <HStack alignItems="center">
            <TouchableOpacity onPress={() => setGoSearch(!goSearch)}>
              <View px="$2" py="$2">
                <Ionicons name="close" size={30} color="white" />
              </View>
            </TouchableOpacity>

            <Input
              variant="outline"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              w="73%"
              mx="$2">
              <InputField
                placeholder="search..."
                color="$white"
                onChangeText={value => setSearchText(value)}
                value={searchText}
              />
            </Input>
            <TouchableOpacity onPress={() => console.log(searchText)}>
              <View px="$2" py="$2">
                <Feather name="search" size={25} color="white" />
              </View>
            </TouchableOpacity>
          </HStack>
        )}
        {!goSearch && isSearch && (
          <TouchableOpacity onPress={() => setGoSearch(!goSearch)}>
            <View px="$2" py="$2">
              <Feather name="search" size={25} color="white" />
            </View>
          </TouchableOpacity>
        )}
      </HStack>
    </Box>
  );
};

export default CommonHeaderPlusBack;
