import React, {useState} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Image} from 'react-native';
import useNewsFeed from './useNewsFeed';
import styles from './newsFeed.style';
import {SwipButtonCustom} from '../../../components/componentsIndex';

const NewsFeed = () => {
  const {
    handleSuccess,
    newsFeedData,
    Show,
    handleSwipeSuccess,
    handleReset,
    currentIndex,
  } = useNewsFeed();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        {Show == false ? (
          <View style={styles.titleMainView}>
            <Text style={styles.titleText}>New Feed App</Text>
            <SwipButtonCustom
              handleSuccess={handleSuccess}
              handleReset={() => {}}
            />
          </View>
        ) : (
          <>
            <View>
              <TouchableOpacity style={styles.cardView}>
                <Image
                  source={{uri: newsFeedData[currentIndex]?.urlToImage}}
                  style={styles.urlToImage}
                />
                <View style={styles.textView}>
                  <Text style={styles.title}>
                    Title : {newsFeedData[currentIndex]?.title}
                  </Text>
                  <Text style={styles.description}>
                    Description: {newsFeedData[currentIndex]?.description}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.swipView}>
              <SwipButtonCustom
                handleSuccess={handleSwipeSuccess}
                handleReset={handleReset}
              />
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default NewsFeed;
