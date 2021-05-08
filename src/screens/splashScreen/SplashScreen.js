import React from 'react';
import { Image, View } from 'react-native';
import { Colors } from '../../res/index'

const SplashScreen = (props) =>{
    setTimeout(() => {
        props.navigation.navigate('LoginSignUp')
      }, 3000)

    return(
        <View style={{backgroundColor: Colors.primaryColor, flex: 1}}>
        </View>
    )
}

export default SplashScreen;