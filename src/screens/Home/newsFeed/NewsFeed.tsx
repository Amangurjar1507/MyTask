import React, {FC} from 'react';
import {View, FlatList} from 'react-native';
import styles from './newsFeed.style';
import {CustomStatusbar, Header, SwipButton} from '../../../components/componentsIndex';
import useNewsFeed from './useNewsFeed';
import NewsCard from '../../../components/card/newsCard/NewsCard';

const NewsFeed: FC = () => {
  const {onSwipNewsShow, newsFeedData, setNewsFeedData, Show, onSwipNewsClose} =
    useNewsFeed();
  return (
    <View style={styles.maincontainer}>
      <CustomStatusbar  />
      <Header lable ="News Feed" />
      <View style={styles.container}>
        <SwipButton
          title=" >> Right Swipe to  >>"
          onPressShow={onSwipNewsShow}
          buttonTextStyle={styles.buttonTextStyle}
        />
        {Show && (
          <FlatList
            data={newsFeedData}
            style={styles.flatList}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
            renderItem={({item, index}) => (
              <NewsCard item={item} index={index} />
            )}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

export default NewsFeed;
