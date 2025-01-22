import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1 } from '../screens/tabs/Tab1';
import { GlobalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: GlobalColors.primary,
        headerShown: true,
        tabBarLabelStyle: {
          marginBottom: 5
        },
        headerStyle: {
          elevation: 0,
          backgroundColor: GlobalColors.background,
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0
        },
      }}>
      <Tab.Screen options={ { title: 'Contracts', tabBarIcon: ({ color }) => (<IonIcon name='document-text-outline' color={ color }/>) } } name="Tab1" component={Tab1} />
      <Tab.Screen options={ { title: 'Orders', tabBarIcon: ({ color }) => (<IonIcon name='bag-outline' color={ color }/>) } } name="Tab2" component={TopTabNavigator} />
      <Tab.Screen options={ { title: 'Stock', tabBarIcon: ({ color }) => (<IonIcon name='cube-outline' color={ color }/>) } } name="Tab3" component={StackNavigator} />
    </Tab.Navigator>
  );
}