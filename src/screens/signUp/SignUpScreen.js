import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const SignUpScreen = (props) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Login')}}>
                <Text style={{color: 'white', fontSize: 24}}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    }
})

export default SignUpScreen;