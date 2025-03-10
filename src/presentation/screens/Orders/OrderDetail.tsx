import React from 'react';
import { Text, View } from 'react-native';
import { GlobalStyles } from '../../theme/theme';

export const OrderDetail = () => {
  return (
    <View style={[GlobalStyles.container]}>


      <Text style={{ paddingVertical: 20 }}>
        Order detail tab
      </Text>

    </View>
  );
};
