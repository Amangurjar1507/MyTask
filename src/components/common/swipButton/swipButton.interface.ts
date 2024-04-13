import {StyleProp, TextStyle, ViewStyle} from 'react-native/types';

export interface SwipButtonProps {
  title?: string;
  buttonTextStyle?: StyleProp<TextStyle> | undefined;
  buttonContainer?: StyleProp<ViewStyle> | undefined;
  onPressShow: () => void;
 }
