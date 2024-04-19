import React, {FC, memo} from 'react';
import {SwipButtonProps} from './swipButtonCustom.interface';
import SwipeButton from 'rn-swipe-button';
import color from '../../../theme/color';

const SwipButtonCustom: FC<SwipButtonProps> = ({
   handleReset,
   handleSuccess,
}) => {
  return (
    <SwipeButton
      wipeButton
      height={45}
      width={330}
      title="Swipe to See Next"
      onSwipeSuccess={handleSuccess}
      shouldResetAfterSuccess={true}
      onReset={handleReset}
      railFillBackgroundColor={color.buttonColor} // Set the initial color here
      thumbIconBackgroundColor={color.textWhite}
     />
  );
};

export default memo(SwipButtonCustom);
