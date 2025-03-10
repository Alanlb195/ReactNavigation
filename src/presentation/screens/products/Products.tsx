import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { GlobalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import { type RootStackParamList } from '../../routes/StackNavigator'

const productList = [
  { id: 1, name: 'Product one' },
  { id: 2, name: 'Product two' },
  { id: 3, name: 'Product three' },
  { id: 4, name: 'Product four' },
  { id: 5, name: 'Product five' },
  { id: 6, name: 'Product six' },
]

export const Products = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
      <View style={GlobalStyles.container}>
        
        <FlatList
          data={productList}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <PrimaryButton
              label={item.name}
              onPress={() => {
                navigation.navigate('Product', {
                  id: item.id,
                  name: item.name
                });
              }}>
            </PrimaryButton>

          )}
        />

        <Text style={{ marginBottom: 10, fontSize: 27 }}>Settings: </Text>

        <PrimaryButton
          onPress={() => navigation.navigate('Settings' as never)}
          label='Settings'
        />

        <View style={{ height: 100 }}/>

      </View>
  )
}
