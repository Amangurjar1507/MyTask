//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import imageIndex from '../../assets/imageIndex';

// create a component
const MyDashboard = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          marginTop: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
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

      <View
        style={{
          marginTop: 60,
          marginHorizontal: 20,
          flexDirection: 'row',
          backgroundColor: '#244C87',
          paddingVertical: 20,
        }}>
        <View
          style={{
            flex: 1,
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontSize: 24,
              fontWeight: '400',
              color: 'white',
            }}>
            USDFx Balance
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontSize: 24,
              fontWeight: '400',
              color: 'white',
            }}>
            0.00
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginTop: 15,
          marginHorizontal: 20,
          fontSize: 18,
          fontSize: 24,
          fontWeight: '700',
          color: '#244C87',
        }}>
        Trade at your fingertips
      </Text>

      <View
        style={{
          marginTop: 8,
          flexDirection: 'row',
          paddingVertical: 8,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 1,
            marginHorizontal: 20,
            paddingVertical: 18,
            flexDirection: 'row',
            backgroundColor: '#9DB7D9',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={imageIndex.waring}
            style={{height: 20, width: 20, marginLeft: 15}}
          />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 18,
              fontWeight: '400',
              color: '#244C87',
            }}>
            Buy USDFx
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginHorizontal: 20,
            paddingVertical: 18,
            flexDirection: 'row',
            backgroundColor: '#9DB7D9',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={imageIndex.waring}
            style={{height: 20, width: 20, marginLeft: 15}}
          />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 18,
              fontWeight: '400',
              color: '#244C87',
            }}>
            P2P Trade
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginTop: 2,
          marginHorizontal: 20,
          fontSize: 18,
          fontSize: 24,
          fontWeight: '700',
          color: '#244C87',
        }}>
        Know USDFx Ecosystem
      </Text>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 20,
          flexDirection: 'row',
          paddingVertical: 8,
        }}>
        <View
          style={{
            flex: 1,
            paddingVertical: 9,
            flexDirection: 'row',
            backgroundColor: '#244C87',
            marginTop: 5,
          }}>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: '400',
              color: 'white',
            }}>
            Learn about Partner program
          </Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          paddingVertical: 5,
        }}>
        <View
          style={{
            flex: 1,
            paddingVertical: 9,
            flexDirection: 'row',
            backgroundColor: '#244C87',
          }}>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: '400',
              color: 'white',
            }}>
            Learn about Partner program
          </Text>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          paddingVertical: 5,
        }}>
        <View
          style={{
            flex: 1,
            paddingVertical: 9,
            flexDirection: 'row',
            backgroundColor: '#244C87',
          }}>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: '400',
              color: 'white',
            }}>
            Learn about Partner program
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginTop: 15,
          marginHorizontal: 20,
          fontSize: 18,
          fontSize: 24,
          fontWeight: '700',
          color: '#244C87',
        }}>
        Important Links
      </Text>

      <View
        style={{
          marginTop: 8,
          flexDirection: 'row',
          paddingVertical: 8,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flex: 1,
            marginHorizontal: 20,
            paddingVertical: 18,
            flexDirection: 'row',
            backgroundColor: '#9DB7D9',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={imageIndex.waring}
            style={{height: 20, width: 20, marginLeft: 15}}
          />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 18,
              fontWeight: '400',
              color: '#244C87',
            }}>
            Partner App
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginHorizontal: 20,
            paddingVertical: 18,
            flexDirection: 'row',
            backgroundColor: '#9DB7D9',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={imageIndex.waring}
            style={{height: 20, width: 20, marginLeft: 15}}
          />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 18,
              fontWeight: '400',
              color: '#244C87',
            }}>
            Contact us
          </Text>
        </View>
      </View>

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
    backgroundColor: '#d0e0f3',
  },
});

//make this component available to the app
export default MyDashboard;
