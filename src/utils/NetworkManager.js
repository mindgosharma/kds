import React from "react";
import NetInfo from "@react-native-community/netinfo";
// import URL, { apis, AppInfo } from '.';
// import Utility from './Utility'
// import Constants from "../res/Constants";

const fetchRequest = (api, method, parameters = {}) =>{
    // let url = `${URL.baseURL}${api.replace(' ', '')}`;
    let timeout = (1000 * 60) * 2;  // 2 mins
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
     };
     let body = (method == 'GET' ? null : JSON.stringify(parameters));
     return fetch(api, { method, timeout, headers, body })
     .then(response => {
         console.log('recieved network reponse part2')
         try {
             return response.json();
         } catch (e) {
             console.log('recieved network reponse part1', e)
             console.log('recieved network reponse part1 value', response)
             return { "statusCode": 400, "message": response }
         }
        
     }).then(async (data) => {
        //  this.progressBarRequest(false);
        //  if (__DEV__) {
             console.log(`[Network Success]: ${JSON.stringify(data)}`);
        //  }

        //  if (data.statusCode == 401) {
        //      await Utility.sharedInstance.appLogoutHandler()
        //      return data;
        //  }
         return data;
     }).catch(error => {
        //  this.progressBarRequest(false);
         console.log(" Nwetrk Err ", error);
         return { "statusCode": 400, "message": "Network Failure please try again" }
        // alert(error ? error.message : 'Something went wrong..!!');
     });
} 


const fetchMultiPartRequest = (api, method, parameters) => {
    // // let url = `${URL.baseURL}${api}`;
    let timeout = (1000 * 60) * 2;  // 2 mins
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
    };
    
    return fetch(api, { method, timeout, headers, parameters})
        .then(response => {
            return response.json()
        }).then(async (data) => {


            // if (__DEV__) {
            //     console.log(`[Network Success]: ${JSON.stringify(data)}`);
            // }

            // if (data.statusCode == 401) {
            //     await Utility.sharedInstance.appLogoutHandler()
            //     return data;
            // }

            return data;
        }).catch(error => {
            console.log(error);
            alert(error ? error.message : 'Something went wrong..!!');
        });

}


export {
    fetchRequest,
    fetchMultiPartRequest
}