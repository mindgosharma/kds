import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { HomeHeader } from '../../component/index';
import {Colors, Assets, Strings} from '../../res/index';


const HomeScreen = (props) => {

    return (
        <View style={styles.container}>
             <View style={styles.headerContainer}>
                <HomeHeader
                    leftFirstImage={Assets.common.more}
                    leftFirstOnPress={() => props.navigation.open()}
                    leftSecondString={Strings.aapkaaJyotish}
                    rightSecondImage={Assets.common.wallet}
                    rightSecondOnPress={()=>alert('Wallet')}
                    rightFirstImage={Assets.common.notification}
                    rightFirstOnPress={()=>alert('Notification')}
                />
             </View>
             <View style={styles.bodyContainer}>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: Colors.primaryColor
    },
    headerContainer:{
        flex: 1
    },
    bodyContainer:{
        flex: 8
    }
})

export default HomeScreen;