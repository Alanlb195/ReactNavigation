import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/home/Home';
import { Products } from '../screens/products/Products';
import { Settings } from '../screens/settings/Settings';
import { GlobalColors } from '../theme/theme';
import { Product } from '../screens/products/Product';
import { useNavigation } from '@react-navigation/native';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';

export type RootStackParamList = {
  Home: undefined;
  Product: { id: number; name: string };
  Products: undefined;
  Settings: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  const navigator = useNavigation();

  return (
    <>
      <HamburgerMenu />

      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: GlobalColors.background,
          },
          headerTitleAlign: 'center',
          headerShown: true,
          headerTintColor: GlobalColors.dark,
        }}>
        <RootStack.Screen name="Home" component={Home} options={{
          headerShown: false
        }} />
        <RootStack.Screen name="Products" component={Products} />
        <RootStack.Screen name="Product" component={Product} />
        <RootStack.Screen name="Settings" component={Settings} />
      </RootStack.Navigator>
    </>
  );
};
