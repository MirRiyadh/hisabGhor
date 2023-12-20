import {} from 'react-native';
import React, {useState} from 'react';
import GlueStackProvider from '../../gluestack_config/gluestackProvider';
import CommonHeaderPlusBack from '../../custom/commonHeader/CommonHeaderPlusBack';
import CommonWriteBox from '../../custom/commonWriteBox/CommonWriteBox';

import {Box, CheckIcon} from '@gluestack-ui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomModal from '../../custom/customModal/CustomModal';
import {Text} from '@gluestack-ui/themed';

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
        <CommonWriteBox
          icon={<FontAwesome name="pencil-square-o" color="white" size={35} />}
          title="Total Deu"
          amount="500"
          btTitle="Add People"
          modal={modal}
          setModal={setModal}
        />
        <Box>
          <Text>
            alsdjfopsajdofjsakdjfkjsdafjsladjfjsdafjdsjf
            aslkdjfljsadkfjklsajdkfjsakdf asdlfjlksadjfkjsadf asdlkfjsldajf
          </Text>
        </Box>
        <CustomModal
          modalVisible={modal}
          setModalVisible={setModal}
          Radius={20}
          height="80%"
          width="90%"
          appearance={true}
          backButton={true}
          backButtonTitle="Modal Open hoise">
          <Box>
            <Text>Arif</Text>
          </Box>
        </CustomModal>
      </Box>
    </GlueStackProvider>
  );
};

export default DueEstimationScreen;
