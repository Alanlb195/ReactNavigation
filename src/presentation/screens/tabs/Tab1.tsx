import React from 'react';
import { Text, View} from 'react-native';
import {GlobalStyles} from '../../theme/theme';
import { HamburgerMenu } from '../../components/shared/HamburgerMenu';

export const Tab1 = () => {

  return (
    <View style={GlobalStyles.container}>
      <HamburgerMenu />
      <Text>Tab 1 contracts screen</Text>
    </View>
  );
};
