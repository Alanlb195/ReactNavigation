import React from 'react';
import {GlobalColors, GlobalStyles} from '../../theme/theme';
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {type RootStackParamList} from '../../routes/StackNavigator';
import {StyleSheet, Text, View} from 'react-native';

export const Home = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={GlobalStyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Products"
      />

      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />

      <Text style={[styles.helloText, { padding: 20 }]}>Hello from home screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  helloText:{
    textAlign: 'center',
    fontSize: 20,
    color: GlobalColors.success
  }
});
