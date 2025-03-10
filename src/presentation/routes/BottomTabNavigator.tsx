import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ContractsTab } from '../screens/tabs/ContractsTab';
import { GlobalColors } from '../theme/theme';
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
          marginBottom: 0
        },
        headerStyle: {
          elevation: 0,
          backgroundColor: GlobalColors.background,
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          paddingBottom: 10
        },
        tabBarLabelPosition: 'beside-icon',

        tabBarBadgeStyle: {
          color: 'white',
          backgroundColor: 'red',
        },

        // animation: 'fade'
      }}>

      <Tab.Screen options={{
        title: 'Contracts',
        tabBarIcon: ({ color }) => (<IonIcon name='document-text-outline' color={color} size={25} />)
      }}
        name="TAB_1"
        component={ContractsTab}
      />

      <Tab.Screen options={{
        title: 'Stock',
        tabBarIcon: ({ color }) => (<IonIcon name='cube-outline' color={color} size={25}/>)
      }}
        name="TAB_3"
        component={StackNavigator}
      />

      <Tab.Screen options={{
        title: 'Orders',
        tabBarIcon: ({ color }) => (<IonIcon name='bag-outline' color={color} size={25}/>),
        tabBarBadge: '1',
      }}
        name="TAB_2"
        component={TopTabNavigator}
      />

    </Tab.Navigator>
  );
}