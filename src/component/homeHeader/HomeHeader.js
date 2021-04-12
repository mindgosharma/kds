import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

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
        backgroundColor: '#a89932',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default HomeHeader;