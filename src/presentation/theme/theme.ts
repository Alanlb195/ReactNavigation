import { StyleSheet } from "react-native";


export const GlobalColors = {
    primary: '#7037eb',
    secondary: '#f72585',
    tertiary: '#3a0ca3',
    success: '#4cc9f0',
    warning: '#fca311',
    danger: '#e71d36',
    dark: '#22223b',
    
    background: '#ffffff'
}


export const GlobalStyles = StyleSheet.create({

    container: {
        flex: 1,
        // paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: GlobalColors.background
    },

    primaryButton: {
        backgroundColor: GlobalColors.primary,
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center'
    },

    buttonText: {
        color: GlobalColors.background,
        fontSize: 18
    }



});