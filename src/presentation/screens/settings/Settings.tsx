import { StackActions, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { GlobalStyles } from '../../theme/theme';
import { PrimaryButton } from '../../components/shared/PrimaryButton';

export const Settings = () => {

  const navigator = useNavigation();

  return (
    <View style={ GlobalStyles.container }>
        <Text>Settings screen</Text>

        <PrimaryButton label='Go Back'
          onPress={ () => {
            navigator.goBack();
          } }>
        </PrimaryButton>

        <PrimaryButton label='Back to home'
          onPress={ () => {
            navigator.dispatch( StackActions.popToTop );
          } }>
        </PrimaryButton>
        
    </View>
  )
}
