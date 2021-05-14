import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Assets, Strings} from '../../res/index';
import {HomeHeader, AppButton} from '../../component/index';

const LoginComponent = props => {
  const loginCall = () => {
    alert('LoginPressed');
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
        <View style={styles.bodyTopContainer}></View>
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
                [
                  props.navigation.navigate(
                    props.backTitle == Strings.login
                      ? Strings.signup
                      : Strings.login,
                  ),
                ];
              }}
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
    // backgroundColor: 'green',
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
});

export default LoginComponent;
