import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { IonIcon } from '../../components/shared/IonIcon';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../theme/theme';

export const Profile = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View style={[GlobalStyles.container, { paddingTop: top + 20 }]}>

      <View style={{ 
        flexDirection: 'row', 
        alignItems: 'center', 
        // justifyContent: 'space-between', 
        paddingHorizontal: 15
      }}>
        
        <Pressable
          // style={{ position: 'absolute', left: 15 }}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <IonIcon name="menu-sharp" size={35} />
        </Pressable>

        <View style={{ flex: 1, alignItems: 'flex-start', paddingLeft: 15 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Profile</Text>
        </View>
      </View>

    </View>
  );
};
