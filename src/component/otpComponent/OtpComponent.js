import React,{forwardRef, useRef, useImperativeHandle, useEffect} from 'react';
import {View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
// import {AppButton} from '../../componet/index';
import {Colors, Assets, Strings, GlobalStyle} from '../../res/index';

const OtpComponent = forwardRef((props, ref) => {

     const [seconds, setSeconds]=React.useState(30)
     const firstBox=useRef(null)
     const secondBox=useRef(null)
     const thirdBox=useRef(null)
     const fourthBox=useRef(null)
     const fifthBox=useRef(null)
     const sixthBox=useRef(null)

     useImperativeHandle(ref, () => ({

         otpCountDown(){
            otpCountDownTimer()
        }
    
      }));

    //Countdown timer
    const otpCountDownTimer=()=>{
    let interval = setInterval(() => {
        setSeconds(prev => {
            if(prev === 1) clearInterval(interval)
            return prev - 1
        })
        },1000)
        return () => clearInterval(interval)
    }

     //UseEffect method
     useEffect(()=>{
        firstBox.current.focus()
        otpCountDownTimer()
    },[])

    return(
         <View>
               <View 
                    style={styles.topComponentContainer}
               >    
                  
                    {/* <Text style={styles.verifyOtpTitleTxt}>
                         {props.verifyOtpTitle}
                    </Text>
                    <View style={styles.verifyOtpDescriptionContainer}>
                        <Text style={styles.verifyOtpDescriptionTxt}>
                             {props.verifyOtpDescription}
                         </Text>
                     </View> */}
                     <View style={styles.otpBoxContainer}>
                        <TextInput
                            textAlign={'center'}
                            maxLength={1}
                            secureTextEntry={true}
                            keyboardType={'number-pad'}
                            style={[styles.otpTxtInput]}
                            ref={firstBox}
                            onChangeText={(firstPin)=>{
                                props.getFirstPin(firstPin)
                                if(firstPin!==''){
                                    secondBox.current.focus()
                                }
                            }}
                        />
                        <TextInput
                            textAlign={'center'}
                            maxLength={1}
                            secureTextEntry={true}
                            keyboardType={'number-pad'}
                            style={[styles.otpTxtInput]}
                            ref={secondBox}
                            onChangeText={(secondPin)=>{
                                props.getSecondPin(secondPin)
                                if(secondPin!==''){
                                    thirdBox.current.focus()
                                }
                            }}
                        />
                        <TextInput
                            textAlign={'center'}
                            maxLength={1}
                            secureTextEntry={true}
                            keyboardType={'number-pad'}
                            style={[styles.otpTxtInput]}
                            ref={thirdBox}
                            onChangeText={(thirdPin)=>{
                                props.getThirdPin(thirdPin)
                                if(thirdPin!==''){
                                    fourthBox.current.focus()
                                }
                            }}
                        />
                        <TextInput
                            textAlign={'center'}
                            maxLength={1}
                            secureTextEntry={true}
                            keyboardType={'number-pad'}
                            style={[styles.otpTxtInput]}
                            ref={fourthBox}
                            onChangeText={(fourthPin)=>{
                                props.getFourthPin(fourthPin)
                            }}
                            
                         />
                        <TextInput
                            textAlign={'center'}
                            maxLength={1}
                            secureTextEntry={true}
                            keyboardType={'number-pad'}
                            style={[styles.otpTxtInput]}
                            ref={fifthBox}
                            onChangeText={(fifthPin)=>{
                                props.getFifththPin(fifthPin)
                            }}
                            
                         />
                        <TextInput
                            textAlign={'center'}
                            maxLength={1}
                            secureTextEntry={true}
                            keyboardType={'number-pad'}
                            style={[styles.otpTxtInput]}
                            ref={sixthBox}
                            onChangeText={(sixthPin)=>{
                                props.getSixthPin(sixthPin)
                            }}
                            
                         />
                    </View>
                </View> 
       </View>   
    )
})

const styles = StyleSheet.create({

    topComponentContainer: {
        height: GlobalStyle.size.height/3,
        paddingHorizontal: GlobalStyle.size.width/12,
        justifyContent: 'flex-end',
    },
    verifyOtpTitleTxt: { 
        fontSize: 26,
        // fontFamily: Fonts.Butler.Bold,
        color: Colors.secondaryColor
    },
    verifyOtpDescriptionContainer: {
         paddingTop: 5,
         paddingBottom: 40
    },
    verifyOtpDescriptionTxt: { 
        fontSize: 14,
        // fontFamily: Fonts.SFCompactDisplay.Light,
        color: Colors.textColor.secondary
    },
    otpBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    otpTxtInput: {
        borderWidth: 1,
        borderColor: Colors.hexaColor,
        borderRadius: 5,
        width: GlobalStyle.size.width/10,
        height: GlobalStyle.size.width/10,
        fontSize: 45,
        backgroundColor: Colors.white
    },
    buttonsContainer: {
        flex: 6,
        paddingHorizontal: 20,
        paddingTop: 23
    },
    countDownSecondContainer: {
        paddingVertical: 20,
        alignItems: 'center'
    },
    countDownSecondTxt: {
        fontSize: 16,
        // fontFamily: Fonts.SFCompactDisplay.Bold,
        color: Colors.primaryColor
    },
    didNotRecieveOtpContainer: { 
        alignItems: 'center',
        paddingVertical: 12
    },
    didNotRecieveOtpTxt: {
        // fontFamily: Fonts.SFCompactDisplay.Regular,
        fontSize: 14,
        color: Colors.black
    },
    onPressResend: { 
        borderRadius: 30,
        borderWidth: 1.5,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    onPressResendTxt: { 
        fontSize: 18,
        // fontFamily: Fonts.SFCompactDisplay.Bold,
        color: Colors.primaryColor
    },
    cancelContainer: {
        alignItems: 'center',
        paddingVertical: 12
    },
    cancelTxt: {
        color: Colors.textColor.tertiary,
        fontSize: 14,
        // fontFamily: Fonts.SFCompactDisplay.Regular
    },
    onPressCancel: {
        borderBottomWidth: 1,
        borderColor: Colors.textColor.tertiary
    }
})

export default OtpComponent;