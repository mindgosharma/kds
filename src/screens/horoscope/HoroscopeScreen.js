import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const HoroscopeScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={{color: 'white',fontSize: 14}}>
                Horoscope Screen
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

export default HoroscopeScreen;