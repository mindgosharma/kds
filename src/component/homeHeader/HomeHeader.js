import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { Colors } from '../../res/index'

const HomeHeader= (props)=> {
        return(
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <TouchableOpacity 
                        onPress={props.leftFirstOnPress}
                        activeOpacity={1}
                        style={styles.leftFirstOnPress}
                    >
                        <Image 
                            source={props.leftFirstImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={props.leftSecondOnPress}
                        activeOpacity={1}
                        style={styles.leftSecondOnPress}
                    >
                        <Text style={styles.leftSecondString}>
                            {props.leftSecondString}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rightContainer}>
                    <TouchableOpacity 
                        onPress={props.rightSecondOnPress}
                        activeOpacity={1}
                        style={styles.rightSecondOnPress}
                    >
                        <Image 
                            source={props.rightSecondImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={props.rightFirstOnPress}
                        activeOpacity={1}
                    >
                        <Image 
                            source={props.rightFirstImage}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primaryColor,
        flexDirection: 'row',
        paddingHorizontal: 18,
        paddingVertical: 26,
        justifyContent: 'space-between',
    },
    leftContainer: {
        flexDirection: 'row',
    },
    rightContainer: {
        flexDirection: 'row',

    },
    leftSecondOnPress: {
        paddingLeft: 15,
    },
    rightSecondOnPress: {
        paddingRight: 27
    },
    leftSecondString: {
        fontSize: 25,
    },
    leftFirstOnPress: {
       paddingVertical: 8,
       paddingHorizontal: 10
    }   

})

export default HomeHeader;