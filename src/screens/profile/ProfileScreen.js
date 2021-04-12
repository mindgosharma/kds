import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ProfileScreen = () => {

    return (
        <View style={styles.container}>
            <Text style={{color: 'white',fontSize: 14}}>
                Profile Screen
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

export default ProfileScreen;