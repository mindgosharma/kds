/**
* @description:This is Assets file
* @author:Vibhishan
* @created_on:18/05/2021
* @param:
* @return:
* @modified_by:Vibhishan
* @modified_on:29/05/2021
*/

export const AppInfo = {
     //Stage
     //baseUrlAPI: 'http://dev.wealthconcert.demo2projects.com/', 
     //Dev
     baseUrlAPI: 'http://dev.wealthconcert.demo2projects.com',
     apiVersion: 'v1',
     serviceTimeOut: 20000,
    
};

export default {

       baseURL: AppInfo.baseUrlAPI + "/" + "api/",

       REQUEST_TYPE: {
           getRequest: 'GET',
           postRequest: 'POST',
           deleteRequest: 'DELETE',
           putRequest: 'PUT',
           multipart: "mutipart",
       },
       END_POINT: {
           register: 'register',
           login: 'login',
           logout: 'logout',
           verify_email: 'verify_email',
           send_otp: 'send_otp',
           forgot_password : 'forgot_password',
           reset_password: 'reset_password',
           profile: 'profile',
           update_profile: 'update_profile',
           change_mobile : 'change_mobile',
           update_mobile: 'update_mobile',
           change_email: 'change_email',
           update_email: 'update_email',
           send_otp_mobile: 'send_otp_mobile',
           verify_mobile: 'verify_mobile',
           verify_password: 'verify_password',
           change_password: 'change_password',
           contact_us: 'contact_us',
           staticpageAbout: 'staticpages/about',
           staticpagesPrivacyPolicy: 'staticpages/privacy-policy',
           staticpagesTermsOfUse: 'staticpages/terms-of-use',
           group: 'group',
           user_groups: 'user-groups',
      }
}
