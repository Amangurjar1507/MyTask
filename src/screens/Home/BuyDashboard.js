//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import imageIndex from '../../assets/imageIndex';

// create a component
const BuyDashboard = () => {
  return (
    <View style={styles.container}>
      <View style={{
                  backgroundColor: '#d0e0f3',
                  height:60

      }}>

      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#d0e0f3',
 
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image source={imageIndex.Menu} style={{height: 35, width: 35}} />
          <Image
            source={imageIndex.card}
            style={{height: 34, width: 34, marginLeft: 15}}
          />
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 100}}>
          <Image source={imageIndex.coppy} style={{height: 22, width: 22}} />
          <Text style={{fontSize: 12, marginLeft: 5, color: '#244C87'}}>
            0xD23e....fa1
          </Text>
        </View>

        <Image
          source={imageIndex.Ellipse}
          style={{height: 40, width: 40, marginLeft: 15}}
        />
        <Image
          source={imageIndex.notificatio}
          style={{height: 20, width: 20, marginLeft: 15}}
        />
      </View>
      </View>

<Text style={{fontSize:30,fontWeight:"800", marginTop:22,marginLeft:35,color:"white"}}>Buy USDFx</Text>
      
January

 
   
 
    
  

      

      <View
        style={{
          position: 'absolute',
          justifyContent: 'flex-end',
          bottom: 0,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#244C87',
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              color: 'white',
            }}>
            USDFx Exchange Price (1 USDFx)
          </Text>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 18,
              fontWeight: '400',
              color: 'white',
            }}>
            88.90 INR
          </Text>

          <Text
            style={{
              marginLeft: 5,
              fontSize: 18,
              fontWeight: '400',
              color: 'white',
            }}>
            SELL
          </Text>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 18,
              fontWeight: '400',
              color: 'white',
            }}>
            SELL
          </Text>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 18,
              fontWeight: '400',
              color: 'white',
            }}>
            SELL
          </Text>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 5,
            backgroundColor: '#C7D5E5',
             }}>
          <ImageBackground source={imageIndex.MainCoin} style={{height: 80, width: 80,   
          
          marginLeft:20,
 }} >

   
  </ImageBackground>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#295392',
  },
});

//make this component available to the app
export default BuyDashboard;
