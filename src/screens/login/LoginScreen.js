// import React from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import { LoginComponent } from '../../component/index';
// import { Strings } from '../../res';

// const LoginScreen = (props) => {

//     return (
//         <View style={styles.container}>
//             <LoginComponent
//                 backTitle={Strings.login}
//                 {...props}
//             />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 10,
//     }
// })

// export default LoginScreen;

import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import { Assets } from '../../res/index';

 
const slides = [
  {
    key: 1,
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: Assets.common.appLogo,
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Title 2',
    text: 'Other cool stuff',
    image: Assets.common.appLogo,
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: Assets.common.appLogo,
    backgroundColor: '#22bcb5',
  }
];
 
export default class App extends React.Component {

  _renderSkipButton = () => {
    return (
      <View style={styles.buttonCircle}>
        {/* <Ion
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        /> */}
        <Text>Skip</Text>
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        {/* <Ion
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        /> */}
        <Text>Next</Text>
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        {/* <Ion
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
        /> */}
        <Text>Done</Text>
      </View>
    );
  };
  
  _renderItem = ({ item }) => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Image source={item.image} />
        <Text style={{fontSize: 32, fontWeight: 'bold'}}>{item.title}</Text>
        <Text style={{fontSize: 20, fontWeight: '600'}}>{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    alert('hello')
  }
  render() {
    
      return(
            <AppIntroSlider 
                dotStyle={{marginBottom: '34%', backgroundColor: 'rgba(0, 0, 0, .3)'}} 
                activeDotStyle={{marginBottom: '34%', backgroundColor: '#27A6EE'}}
                renderItem={this._renderItem} 
                data={slides} 
                onSkip={()=>alert('hello')}
                onDone={this._onDone}
                renderSkipButton={this._renderSkipButton}
                renderDoneButton={this._renderDoneButton}
                renderNextButton={this._renderNextButton}
            />
        )
    
  }
}

const styles = StyleSheet.create({
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(0, 0, 0, .2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //[...]
});