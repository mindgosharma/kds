import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Colors, Assets, Strings} from '../../res/index';
import {HomeHeader, AppButton} from '../../component/index';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const LoginComponent =( props )=> {
  const loginCall = () => {
    props.navigation.navigation('Home')
  };

  const signUpCall = () => {
    alert('SignUpPressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HomeHeader
          leftFirstImage={Assets.common.backArrow}
          leftSecondString={props.backTitle}
          leftFirstOnPress={() => props.navigation.goBack()}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.bodyTopContainer}>
          <Text style={styles.loginSignupVia}>
            {props.backTitle == Strings.login
              ? Strings.loginViaMobileNo
              : Strings.signupViaMobileNo}
          </Text>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder={Strings.countryCode}
              placeholderTextColor={Colors.hexaColor}
              maxLength={10}
              style={styles.textInput}
            />
          </View>
        </View>
        <View style={styles.bodyBottomContainer}>
          <View style={styles.buttonContainer}>
            <AppButton
              onPress={() => {
                props.backTitle == Strings.login ? loginCall() : signUpCall();
              }}
              title={props.backTitle}
              titleColor={Colors.white}
              titleFontSize={16}
              backgroundColor={Colors.secondaryColor}
              borderColor={Colors.secondaryColor}
            />
          </View>
          <View style={styles.donotHaveAccountContainer}>
            <Text style={styles.donotHaveAccount}>
              {Strings.donotHaveAccount}
            </Text>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate( 
                  props.backTitle == Strings.login 
                  ? 
                  Strings.signup 
                  : 
                  Strings.login
                )}}
              style={styles.loginSignupHereOnPress}>
              <Text style={styles.loginSignupHereTxt}>
                {props.backTitle == Strings.login
                  ? Strings.signupHere
                  : Strings.loginHere}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.byTappingSingupTxt}>
              {Strings.byTappingSingup}
            </Text>
            <View style={styles.privacyTNCContainer}>
              <TouchableOpacity>
                <Text style={styles.termsNConditionsTxt}>
                  {Strings.termsNConditions}
                </Text>
              </TouchableOpacity>
              <View style={styles.andContainer}>
                <Text style={styles.andTxt}>{Strings.and}</Text>
              </View>
              <TouchableOpacity>
                <Text style={styles.termsNConditionsTxt}>
                  {Strings.privacyPolicy}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 13,
    backgroundColor: Colors.primaryColor,
  },
  headerContainer: {
    flex: 2,
  },
  bodyContainer: {
    flex: 11,
    backgroundColor: Colors.pentaColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bodyTopContainer: {
    flex: 7,
    paddingVertical: 30,
  },
  bodyBottomContainer: {
    flex: 4,
  },
  buttonContainer: {
    paddingHorizontal: 31,
  },
  donotHaveAccount: {
    fontSize: 17,
    color: Colors.hexaColor,
  },
  loginSignupHereTxt: {
    fontSize: 17,
    color: Colors.septaColor,
  },
  donotHaveAccountContainer: {
    flexDirection: 'row',
    padding: 44,
  },
  loginSignupHereOnPress: {
    paddingLeft: 10,
  },
  byTappingSingupTxt: {
    textAlign: 'center',
    fontSize: 13,
    color: Colors.tertiary,
  },
  privacyTNCContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  andContainer: {
    paddingHorizontal: 3,
  },
  andTxt: {
    textAlign: 'center',
    fontSize: 13,
    color: Colors.tertiary,
  },
  termsNConditionsTxt: {
    color: Colors.septaColor,
    fontSize: 13,
  },
  loginSignupVia: {
    textAlign: 'center',
    fontSize: 24,
    color: Colors.hexaColor,
  },
  textInputContainer: { 
    paddingHorizontal: 31,
    paddingVertical: 68
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.tertiary,
    backgroundColor: Colors.white,
    borderRadius: 5,
    fontSize: 22,
    paddingHorizontal: 15,
    color: Colors.hexaColor,
  }
});

export default LoginComponent;
