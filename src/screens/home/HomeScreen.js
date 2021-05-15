import React from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
import { HomeHeader, CategoryComponent } from '../../component/index';
import {Colors, Assets, Strings } from '../../res/index';

const {height, width}=Dimensions.get('window');

const categoryListData=[
    {
        title:  'All',
        icon: ''
    },
    {
        title:  'Vedic',
        icon: ''
    },
    {
        title:  'Tarot',
        icon: ''
    },
    {
        title:  'Numerlogy',
        icon: ''
    }
]

const HomeScreen = (props) => {

    return (
        <View style={styles.container}>
             <View style={styles.headerContainer}>
                <HomeHeader
                    leftFirstImage={Assets.common.more}
                    leftFirstOnPress={() => props.navigation.openDrawer()}
                    leftSecondString={Strings.aapkaaJyotish}
                    rightSecondImage={Assets.common.wallet}
                    rightSecondOnPress={()=>alert('Wallet')}
                    rightFirstImage={Assets.common.notification}
                    rightFirstOnPress={()=>alert('Notification')}
                />
             </View>
             <View style={styles.bodyContainer}>
                 <ScrollView
                 >  
                     <View style={styles.categoryContainer}>
                         <CategoryComponent
                             categoryData={categoryListData}
                         />
                     </View>
                     <View style={styles.bannerContainer}>
                     </View>
                 </ScrollView>
             </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 17,
        backgroundColor: Colors.primaryColor
    },
    headerContainer:{
        flex: 2
    },
    bodyContainer:{
        flex: 15,
    },
    categoryContainer: {
         height: height/10
    },
    bannerContainer: { 
         height: 140,
         backgroundColor: 'green',
         paddingTop: 20
    }   
})

export default HomeScreen;