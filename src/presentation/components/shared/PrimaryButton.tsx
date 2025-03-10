import React from 'react'
import { Pressable, Text } from 'react-native'
import { GlobalStyles } from '../../theme/theme'
import { useNavigation } from '@react-navigation/native'


interface Props {
    onPress: () => void;
    label: string;
}


export const PrimaryButton = ({ onPress, label }: Props) => {

    const navigation = useNavigation();


    return (

        <Pressable
            onPress={() => onPress()}
            style={GlobalStyles.primaryButton}>
            <Text style={GlobalStyles.buttonText}>{label}</Text>
        </Pressable>

    )

}
