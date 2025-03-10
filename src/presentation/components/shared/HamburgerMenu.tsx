import { DrawerActions, useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Pressable, useWindowDimensions } from 'react-native';
import { IonIcon } from './IonIcon';

export const HamburgerMenu = () => {
  const navigation = useNavigation();
  const dimentions = useWindowDimensions();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () =>
        dimentions.width >= 768 ? (
          <></>
        ) : (
          <>
            <Pressable
              style={{ marginHorizontal: 10 }}
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
              <IonIcon name="menu-sharp" />
            </Pressable>
          </>
        ),
    });
  }, []);

  return <></>;
};
