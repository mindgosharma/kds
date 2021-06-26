import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { LoginComponent } from '../../component/index';
import { Strings } from '../../res';

const LoginScreen = (props) => {

    return (
        <View style={styles.container}>
            <LoginComponent
                backTitle={Strings.login}
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
    }
})

export default LoginScreen;