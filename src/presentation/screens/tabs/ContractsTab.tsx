import React from 'react';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../../theme/theme';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';

export const ContractsTab = () => {

  return (

    <>


      <HamburgerMenu />

      <View style={GlobalStyles.container}>
        <Text>Contracts Tab</Text>
      </View>

    </>
  );
};
