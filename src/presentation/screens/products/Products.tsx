import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { GlobalStyles } from '../../theme/theme'
import { PrimaryButton } from '../../components/shared/PrimaryButton'
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import { type RootStackParamList } from '../../routes/StackNavigator'

const productList = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
  { id: 6, name: 'Product 6' },
  { id: 7, name: 'Product 7' },
  { id: 8, name: 'Product 8' },
  { id: 9, name: 'Product 9' },
  { id: 10, name: 'Product 10' },
  { id: 11, name: 'Product 11' }
]

export const Products = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={GlobalStyles.container}>

      <Text style={{ marginBottom: 10, fontSize: 27 }}>Products: </Text>

      <FlatList
        data={productList}
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

    </View>
  )
}
