import {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';

// Custom hook for swipe button functionality
const useSwipButton = (onPressShow: () => void, onPressClose: () => void) => {
   const X = useSharedValue(10);
  // Define input range for interpolation
  const InterpolateXInput = [0, 150];

  // Define animated gesture handler for swipe actions
  const animatedGestureHandler = useAnimatedGestureHandler({
    // Handler for active gesture state
    onActive: e => {
      if (e.translationX < 0) {
        // Update X value based on gesture translation
        X.value = -e.translationX;
      } else {
        X.value = e.translationX;
      }
    },
     onEnd: () => {
       if (X.value < 150) {
        // Spring back to initial position
        X.value = withSpring(10);
      } else {
        // Slide button to the end position with spring animation
        X.value = withSpring(240);
        // Execute onPressShow callback using runOnJS to ensure it's executed on the JS thread
        runOnJS(onPressShow)();
      }
    },
  });

  // Define animated styles for swipe button and text
  const AnimatedStyles = {
    swipeStyle: useAnimatedStyle(() => {
      // Apply translation based on X value
      return { transform: [{ translateX: X.value }] };
    }),
    swipeText: useAnimatedStyle(() => {
      // Interpolate opacity and translation based on X value
      return {
        opacity: interpolate(
          X.value,
          InterpolateXInput,
          [0.8, 0],
          Extrapolate.CLAMP,
        ),
        transform: [
          {
            translateX: interpolate(
              X.value,
              InterpolateXInput,
              [0, 150],
              Extrapolate.CLAMP,
            ),
          },
        ],
      };
    }),
  };
  return {
    animatedGestureHandler,
    AnimatedStyles,
  };
};

export default useSwipButton;
