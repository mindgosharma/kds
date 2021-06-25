import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { loginAction } from "../../redux/actions";
import { URL, Strings } from '../../res/index';
import { LoginComponent } from '../../component/index';
import {NetworkManager, Utility } from '../../utils/index';


const SignupScreen = (props) => {

    React.useEffect(() => {
        callApiTest()
    }, [])

    const callApiTest = async () => {
        const res = await fetchRequest(URL.dummy_api, URL.getRequest)
        console.log("hello this is multi part data", JSON.stringify(res))
    }

    return (
        <View style={styles.container}>
             <LoginComponent
                backTitle={Strings.signup}
                isFromSingup={true}
                {...props}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
