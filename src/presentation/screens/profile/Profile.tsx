import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/StackNavigator';
import {IonIcon} from '../../components/shared/IonIcon';
import {GlobalColors, GlobalStyles} from '../../theme/theme';

export const Profile = () => {
  const {top} = useSafeAreaInsets();

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <>
      <View style={[GlobalStyles.container, {marginTop: top}]}>



        <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>

          <Pressable style={{marginRight: 10}}
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
            <IonIcon name="menu-outline" />
          </Pressable>

          <Text>Profile</Text>

        </View>




      </View>
    </>
  );
};
