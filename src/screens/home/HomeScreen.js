import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={{color: 'white',fontSize: 14}}>
                Home Screen
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

export default HomeScreen;