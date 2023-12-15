import GlueStackProvider from "../gluestack_config/gluestackProvider";

export default function Loan() {
    
    
    return (
      <GlueStackProvider>
        <Box height={'100%'}>
          <Box height={'$80'} bg={'$indigo500'} py={'$4'}>
            <HStack justifyContent="space-between" px={'$2'}>
              <MaterialCommunityIcons name="menu" size={22} color={'white'} />
              <Switch
                size="md"
                isChecked={true}
                onChange={e =>
                  e.nativeEvent.value ? setIsDark('light') : setIsDark('dark')
                }
              />
            </HStack>
          </Box>
        </Box>
      </GlueStackProvider>
    );
  }