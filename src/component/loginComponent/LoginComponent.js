import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Assets, Strings} from '../../res/index';
import {HomeHeader} from '../../component/index';

const LoginComponent = (props)=> {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <HomeHeader
             leftFirstImage={Assets.common.backArrow}
             leftSecondString={props.backTitle}
             leftFirstOnPress={() => props.navigation.goBack()}
        />
      </View>
      <View style={styles.bodyContainer}></View>
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
});

export default LoginComponent;
