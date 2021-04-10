import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { loginAction } from "../../redux/actions";
import { URL } from '../../res/index';
// import Utility, { showToast, validateEmailAddress, validateEmptyField, _storeData } from "../../utils/Utility";
// import { fetchRequest, fetchMultiPartRequest } from '../../utils/NetworkManager';


const SignUpScreen = (props) => {

    React.useEffect(() => {
        // callApiTest()
    },[])

    const callApiTest = async () => {
        // fetchRequest()
        // fetchMultiPartRequest()
        // const res = await NetworkManager.networkManagerInstance.fetchRequest(URL.dummy_api, URL.getRequest, true, parameterData)
        //  console.log("This is checking api callingh method",JSON.stringify(res))
        if (res.statusCode === 200) {
            console.log("hello")
            // let showPopUpMesssage = res.message
            // let base_Price = res.data.base_price
            // let country_currency = res.data.currency
            // Session.sharedInstance.userDetails[Constants.userDetailsFields.isEditableReferral] = this.state.referralCode != '' ? false : true
            // NetworkManager.networkManagerInstance.progressBarRequest(false)
            // this.setState({ isPopVisible: true, isEditableReferral: false, popUpMessage: `${showPopUpMesssage} ${country_currency} ${base_Price}${'.'}` })
        } else {
            // NetworkManager.networkManagerInstance.progressBarRequest(false)
            // this.setState({ referralCode: '' })
            // showToast(res.message)
            console.log('hii')
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { props.navigation.navigate('Login') }}>
                <Text style={{ color: 'white', fontSize: 24 }}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    }
})

//This is mapStateToProps method which get data from Redux store
const mapStateToProps = (state) => {
    return state;
};


//This is mapDispatchToProps method which update the store by discpatching action
const mapDispatchToProps = (dispatch) => {
    return {
        setLoginData: (payload) => {
            dispatch(loginAction(payload));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen);
