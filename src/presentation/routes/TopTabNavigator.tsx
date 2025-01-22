import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {About} from '../screens/Orders/About';
import {HamburgerMenu} from '../components/shared/HamburgerMenu';
import { Orders } from '../screens/Orders/Orders';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <>
      <HamburgerMenu />
      <Tab.Navigator>
        <Tab.Screen name='Orders' component={Orders} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
    </>
  );
};
