import React from 'react';
import {View, StyleSheet, FlatList, Dimensions, Text} from 'react-native';
import {Colors} from '../../res/index';
import PageControl from "react-native-page-control";

const {height, width}=Dimensions.get('window')

const BannerComponent = (props) => {

    const [current_page, setSurrent_page]=React.useState(0)

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
                  keyExtractor={(item, index) => index.toString()}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
              />
             <View style={{position: 'absolute', left: 20}}>
             <PageControl
              style={{ height: 50 }}
              numberOfPages={props.bannerData.length}
              currentPage={current_page}
              hidesForSinglePage={false}
              pageIndicatorTintColor={Colors.tertiary}
              currentPageIndicatorTintColor={Colors.nonaColor}
              indicatorStyle={{
                borderRadius: 7,
                backgroundColor: Colors.tertiary,
                borderWidth: 3,
                borderColor: Colors.tertiary
              }}
              currentIndicatorStyle={{ borderRadius: 5, height: 10, width: 10 }}
              indicatorSize={{ width: 10, height: 10 }}
            />
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
        height: height/5.72,
        width: width/1.12,
        marginLeft: 10,
        marginRight: 8,
        borderRadius: 5
    }

})

export default BannerComponent;