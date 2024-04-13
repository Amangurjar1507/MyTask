import React, {FC, memo} from 'react';
import {Text, Image, TouchableOpacity, View} from 'react-native';
import {styles} from './newsCard.style';

interface NewsCardProps {
  item: ItemProps;
  index: number;
}
interface ItemProps {
  id: number;
  urlToImage?: string | undefined;
  title?: string | undefined;
  description?: string | undefined;
}

const NewsCard: FC<NewsCardProps> = ({item, index}) => {
    return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image source={{uri: item?.urlToImage}} style={styles.image} />
      <View style={styles.contentContainer}>
        {item?.title && <Text style={styles.title}>Title : {item?.title}</Text>}
        <Text style={styles.description}>
          Description: {item?.description?.trim()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(NewsCard);
