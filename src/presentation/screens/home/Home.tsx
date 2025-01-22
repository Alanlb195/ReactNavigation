import React from 'react'
import { GlobalStyles } from '../../theme/theme'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { type RootStackParamList } from '../../routes/StackNavigator'
import { View } from 'react-native'

export const Home = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (


    <View style={GlobalStyles.container}>

      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label='Products'
      />

      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label='Settings'
      />


    </View>

  )
}
