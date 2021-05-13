import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../res/index';

const HomeHeader=(props)=>{
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{props.navigation.openDrawer()}}>
                    <Text>
                        ==
                    </Text>
                </TouchableOpacity>
                <View>
                    <Text>
                        apkajyotish
                    </Text>
                </View>
                <View>
                    <Text>
                        ==
                    </Text>
                </View>
                <View>
                    <Text>
                        apkajyotish
                    </Text>
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: Colors.primaryColor,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default HomeHeader;