import {Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  Button,
  ButtonText,
  ChevronDownIcon,
  HStack,
  Icon,
  Select,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicator,
  SelectDragIndicatorWrapper,
  SelectIcon,
  SelectInput,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  Text,
  View,
} from '@gluestack-ui/themed';
import Feather from 'react-native-vector-icons/Feather';
import {Actionsheet} from '@gluestack-ui/themed';

const CommonDateFilter = () => {
  const weight = Dimensions.get('window').width;
  //   console.log(weight);
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);

  return (
    <HStack justifyContent="space-between" py="$3" mx="$2">
      <View bg="$coolGray100" py="$1" px="$4" rounded="$full">
        <Text fontSize="$sm" color="$black" fontWeight="$semibold">
          Date
        </Text>
      </View>

      <TouchableOpacity onPress={handleClose}>
        <HStack alignItems="center" gap="$2">
          <Text fontSize="$md" color="$black" fontWeight="$semibold">
            Filter
          </Text>

          <Feather name="chevron-down" size={20} />
          {/* <Select w="25%">
        <SelectTrigger
          borderWidth="$0"
          size="sm"
          // borderRadius="$md"
          variant="rounded"
          // backgroundColor="$coolGray400"
        >
          <SelectInput
            placeholder="Filter"
            placeholderTextColor={'$coolGray900'}
            // placeholderTextColor={
            //   XStore.isDark === 'dark' ? '$coolGray800' : '$coolGray300'
            // }
            fontWeight="$bold"
          />
          <Icon as={ChevronDownIcon} />
          <SelectIcon w="$4" mr="$3">
            <Feather name="chevron-down" size={20} />
          </SelectIcon>
        </SelectTrigger>
        <SelectPortal>
          <SelectBackdrop />
          <SelectContent>
            <SelectDragIndicatorWrapper>
              <SelectDragIndicator />
            </SelectDragIndicatorWrapper>
            <SelectItem label="UX Research" value="ux" />
            <SelectItem label="Web Development" value="web" />
            <SelectItem
              label="Cross Platform Development Process"
              value="Cross Platform Development Process"
            />
            <SelectItem label="UI Designing" value="ui" isDisabled={true} />
            <SelectItem label="Backend Development" value="backend" />
          </SelectContent>
        </SelectPortal>
      </Select> */}

          <Actionsheet
            isOpen={showActionsheet}
            onClose={handleClose}
            zIndex={999}>
            <ActionsheetBackdrop />
            <ActionsheetContent h="$72" zIndex={999}>
              <ActionsheetDragIndicatorWrapper>
                <ActionsheetDragIndicator />
              </ActionsheetDragIndicatorWrapper>
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>Delete</ActionsheetItemText>
              </ActionsheetItem>
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>Share</ActionsheetItemText>
              </ActionsheetItem>
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>Play</ActionsheetItemText>
              </ActionsheetItem>
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>Favourite</ActionsheetItemText>
              </ActionsheetItem>
              <ActionsheetItem onPress={handleClose}>
                <ActionsheetItemText>Cancel</ActionsheetItemText>
              </ActionsheetItem>
            </ActionsheetContent>
          </Actionsheet>
        </HStack>
      </TouchableOpacity>
    </HStack>
  );
};

export default CommonDateFilter;
