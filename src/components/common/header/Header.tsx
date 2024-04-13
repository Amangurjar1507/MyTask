import React, {FC, memo} from 'react';
import {Text, TextStyle, View, ViewStyle} from 'react-native';
import {styles} from './header.style';

interface HeaderProps {
  containerStyle?: ViewStyle;
  lable?: string | undefined;
  lableStyle?: TextStyle;
}

const Header: FC<HeaderProps> = ({containerStyle, lable, lableStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.lableView}>
        {lable && <Text style={[styles.lableStyle, lableStyle]}>{lable}</Text>}
      </View>
    </View>
  );
};

export default memo(Header);
