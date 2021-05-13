import React from 'react';
import {View, Text, Image, StyleSheet} from  'react-native';
import { Colors, Assets, Strings } from '../../res/index';

const LoginSignupScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.topView}>
                <Image 
                    source={Assets.common.appLogo}
                    style={styles.logo}
                />
                <Text style={styles.aapkaaJyotishTxt}>{Strings.aapkaaJyotish}</Text>
            </View>
            <View style={styles.bottomView}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:  10,
        backgroundColor: Colors.primaryColor
    },
    topView: {
        flex:  7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        flex: 3,
        backgroundColor: 'white',
    },
    aapkaaJyotishTxt: {
        fontSize: 30,
        paddingTop: 8
    },
    logo: {
        height: 150,
        width: 150
    }
})

export default LoginSignupScreen;
