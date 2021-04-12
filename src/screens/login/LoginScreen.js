import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const LoginScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 14, color: "white"}}>
                Login Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default LoginScreen;