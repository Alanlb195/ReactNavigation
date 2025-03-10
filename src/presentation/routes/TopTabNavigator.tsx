import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { OrderDetail, OrderList } from '../screens/Orders';
import { HamburgerMenu } from '../components/shared/HamburgerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <>
      <HamburgerMenu />
      <Tab.Navigator>
        <Tab.Screen name="List" component={OrderList} />
        <Tab.Screen name='Detail' component={OrderDetail} />
      </Tab.Navigator>
    </>
  );
};
