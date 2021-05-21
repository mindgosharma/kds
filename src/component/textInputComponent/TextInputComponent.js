import React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {Colors, Assets, Strings} from '../../res/index';

const TextInputComponent = (props) => {

    return(
         <View style={styles.textInputContainer}>
             <Text style={styles.countryCodeTxt}>
                 {Strings.countryCode}
             </Text>
             <TextInput
                style={styles.textInput}
                maxLength={10}
                {...props}
             />
         </View>
    )
}

const styles=StyleSheet.create({

    textInputContainer: {
         backgroundColor: Colors.white,
         borderRadius: 5,
         borderColor: Colors.tertiary,
         borderWidth: 1,
         height: 50,
         paddingLeft: 12,
         flexDirection: 'row',
         alignItems: 'center'
    },
    countryCodeTxt: {
        fontSize: 18
    },
    textInput: {
        fontSize: 22,
        color: Colors.hexaColor,
      }
})

export default TextInputComponent;
