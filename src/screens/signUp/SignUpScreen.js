import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { loginAction } from "../../redux/actions";
import { URL } from '../../res/index';
// import Utility, { showToast, validateEmailAddress, validateEmptyField, _storeData } from "../../utils/Utility";
import { fetchRequest, fetchMultiPartRequest } from '../../utils/NetworkManager';


const SignUpScreen = (props) => {

    React.useEffect(() => {
        callApiTest()
    }, [])

    const callApiTest = async () => {
        const res = await fetchRequest(URL.dummy_api, URL.getRequest)
        console.log("hello this is multi part data", JSON.stringify(res))
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { props.navigation.navigate('Login') }}>
                <Text style={{ color: 'white', fontSize: 14 }}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
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
