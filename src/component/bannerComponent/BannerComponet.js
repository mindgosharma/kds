import React from 'react';
import {View, StyleSheet, FlatList, Dimensions, Text} from 'react-native';
import {Colors} from '../../res/index';
import PageControl from "react-native-page-control";

const {height, width}=Dimensions.get('window')

const BannerComponent = (props) => {

     const renderBanner=(item,index)=>{
         return(
             <View style={styles.bannerContainer}>
                 <Text>
                 </Text>
             </View>
         )
     }

    return(
         <View styles={styles.container}>
              <FlatList
                  data={props.bannerData}
                  renderItem={({item,index})=>renderBanner(item,index)}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
              />
             <View style={{position: 'absolute'}}>
             {/* <PageControl
              style={{ height: 50 }}
              numberOfPages={props.bannerData.length}
              currentPage={0}
              hidesForSinglePage={false}
              pageIndicatorTintColor={'white'}
              currentPageIndicatorTintColor={'green'}
              indicatorStyle={{
                borderRadius: 7,
                backgroundColor: 'white',
                borderWidth: 3,
                borderColor: "rgba(230, 230, 230, 1)"
              }}
              currentIndicatorStyle={{ borderRadius: 8, height: 16, width: 16 }}
              indicatorSize={{ width: 14, height: 14 }}
            /> */}
             </View>
         </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1
    },
    bannerContainer: {
        backgroundColor: Colors.octaColor,
        height: height/5,
        width: width/1.12,
        marginLeft: 10,
        marginRight: 8,
        borderRadius: 5
    }

})

export default BannerComponent;