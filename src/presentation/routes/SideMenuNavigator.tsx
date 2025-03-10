import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Profile } from '../screens/profile/Profile';
import { GlobalColors } from '../theme/theme';
import { Image, useWindowDimensions, View } from 'react-native';
import { BottomTabNavigator } from './BottomTabNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SiteMenuNavigator = () => {

  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;


  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: isLargeScreen ? 'permanent' : 'front',
        // drawerStatusBarAnimation: 'slide',

        drawerActiveBackgroundColor: GlobalColors.primary,
        drawerActiveTintColor: 'white',
        drawerItemStyle: {
          borderRadius: 20,
          paddingHorizontal: 20
        },
        drawerStyle: {
          width: isLargeScreen ? 240 : '70%',
          backgroundColor: 'rgb(61, 155, 205)'
        },
      }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen options={{ drawerIcon: ({ color }) => (<IonIcon name='file-tray-full-outline' color={color}></IonIcon>) }} name='Tabs' component={BottomTabNavigator} />
      <Drawer.Screen options={{ drawerIcon: ({ color }) => (<IonIcon name='person-circle-outline' color={color}></IonIcon>) }} name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}




const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <Image
        source={require('../assets/profile.png')}
        style={{
          height: 100,
          width: 100,
          alignContent: 'flex-start',
          alignSelf: 'flex-start',
          backgroundColor: GlobalColors.success,
          marginBottom: 10,
          borderRadius: 50
        }}
      />

      <DrawerItemList {...props} />

    </DrawerContentScrollView>
  )
}