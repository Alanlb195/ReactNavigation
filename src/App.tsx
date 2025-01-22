import React from 'react';
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {SiteMenuNavigator} from './presentation/routes/SideMenuNavigator';
import {BottomTabNavigator} from './presentation/routes/BottomTabNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      <SiteMenuNavigator />
    </NavigationContainer>
  );
};
