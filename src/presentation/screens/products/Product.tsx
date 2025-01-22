import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { GlobalStyles } from '../../theme/theme';
import { RootStackParamList } from '../../routes/StackNavigator';

export const Product = () => {

  const navigation = useNavigation();

  const params = useRoute<RouteProp<RootStackParamList, 'Product' >>().params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name
    });
  },)
  

  return (
    <View style={ GlobalStyles.container }>
        <Text>Product screen</Text>

        <Text style={ { marginTop: 20, fontSize: 20, textAlign: 'center' } }>
          { params.id } - { params.name }
        </Text>

    </View>
  )
}
