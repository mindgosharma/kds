import { Component } from "react";
import NetInfo from "@react-native-community/netinfo";
import URL, { apis, AppInfo } from '.';
import Utility from './Utility'
import Constants from "../../res/Constants";
const BYPASS_CHECK_FOR_REACHABILITY = false

// export default class NetworkManager extends Component {


//     constructor(props) {
//         super(props)
//     }

//     static networkManagerInstance = NetworkManager.networkManagerInstance == null ? new NetworkManager() : this.networkManagerInstance;
//     isInternetConnected = true;
//     token = null;



//     // progressBarRequest = (status) => {
//     //     Utility.sharedInstance.HOC.showHideProgressBar(status)
//     // }

//     async fetchRequest(api, method, showProgressBar = false, parameters = {}, onRetryClicked = null, serviceTimeOut = AppInfo.serviceTimeOut) {
//         console.log("hello this is netowrk dcladfsadasdf")
//         // let headers = {
//         //     'Accept': 'application/json',
//         //     'Content-Type': 'application/json',
//         // };

//         // if (__DEV__) console.log('this.token ', this.token);
//         // if (this.token != null) {
//         //     headers['Authorization'] = this.token
//         // }

//         // let url = `${URL.baseURL}${api.replace(' ', '')}`;
    
//         // let timeout = (1000 * 60) * 2;  // 2 mins
//         // let body = (method == 'GET' ? null : JSON.stringify(parameters));
//         // return fetch(url, { method, timeout, headers, body })
//         //     .then(response => {
//         //         console.log('recieved network reponse part2')
//         //         try {
//         //             return response.json();
//         //         } catch (e) {
//         //             console.log('recieved network reponse part1', e)
//         //             console.log('recieved network reponse part1 value', response)
//         //             return { "statusCode": 400, "message": response }
//         //         }
               
//         //     }).then(async (data) => {
//         //         // this.progressBarRequest(false);
//         //         if (__DEV__) {
//         //             console.log(`[Network Success]: ${JSON.stringify(data)}`);
//         //         }

//         //         // if (data.statusCode == 401) {
//         //         //     await Utility.sharedInstance.appLogoutHandler()
//         //         //     return data;
//         //         // }
//         //         return data;
//         //     }).catch(error => {
//         //         this.progressBarRequest(false);
//         //         console.log(" Nwetrk Err ", error);
//         //          return { "statusCode": 400, "message": "Network Failure please try again" }
//         //          alert(error ? error.message : 'Something went wrong..!!');
//         //     });


//     }

   
//     // async fetchMultiPartRequest(api, method, body, showProgressBar = false, onRetryClicked = null, serviceTimeOut = AppInfo.serviceTimeOut) {

//     //     let headers = {
//     //         'Accept': 'application/json',
//     //         'Content-Type': 'multipart/form-data',
//     //     };

//     //     // if (this.token != null) {
//     //     //     headers['Authorization'] = this.token
//     //     // }
//     //     let url = `${URL.baseURL}${api}`;
//     //     let timeout = (1000 * 60) * 2;  // 2 mins
       
//     //     return fetch(url, { method, timeout, headers, body })
//     //         .then(response => {
//     //             return response.json()
//     //         }).then(async (data) => {


//     //             if (data.statusCode == 401) {
//     //                 await Utility.sharedInstance.appLogoutHandler()
//     //                 return data;
//     //             }

//     //             return data;
//     //         }).catch(error => {
//     //             console.log(error);
//     //             alert(error ? error.message : 'Something went wrong..!!');
//     //         });

//     // }

// }

const fetchRequest = () =>{
    console.log("hello")
} 


const fetchMultiPartRequest = () => {
    console.log("hello")
}

export {
    fetchRequest,
    fetchMultiPartRequest
}