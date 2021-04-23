import React from 'react';
import {Image, View} from 'react-native';
import { set } from 'react-native-reanimated';

const SplashScreen = (props) =>{
    setTimeout(() => {
        props.navigation.replace('DrawerNav')
      }, 3000)

    return(
        <View style={{backgroundColor: 'red', flex: 1}}>
        </View>
    )
}

export default SplashScreen;