import React, {FC, memo} from 'react';
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {SwipButtonProps} from './swipButton.interface';
import {Image, View} from 'react-native';
import useSwipButton from './useSwipButton';
import styles from './swipButton.style';
import imageIndex from '../../../assets/imageIndex';

const SwipButton: FC<SwipButtonProps> = ({
  buttonContainer,
  title,
  buttonTextStyle,
  onPressShow,
}) => {
  const {animatedGestureHandler, AnimatedStyles} = useSwipButton(onPressShow);
  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.containerMain}>
        <View style={[styles.buttonStyle, buttonContainer]}>
          <PanGestureHandler onGestureEvent={animatedGestureHandler}>
            <Animated.View
              style={[styles.buttonSwipIconStyle, AnimatedStyles.swipeStyle]}>
              <Image
                source={imageIndex.swipeRight}
                style={styles.swipIconStyle}
              />
            </Animated.View>
          </PanGestureHandler>
          <Animated.Text style={[AnimatedStyles.swipeText, buttonTextStyle]}>
            {title}
          </Animated.Text>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default memo(SwipButton);
