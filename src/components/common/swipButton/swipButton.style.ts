import {StyleSheet} from 'react-native';
import color from '../../../theme/color';

const styles = StyleSheet.create({
  container: {
    height: 55,
  },
  containerMain: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttonStyle: {
    width: 300,
    height: 60,
    borderRadius: 10,
    backgroundColor: color.buttonColor,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
  },
  buttonSwipIconStyle: {
    width: 43,
    height: 43,
    backgroundColor: color.textWhite,
    borderRadius: 10,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
  },
  swipIconStyle: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
  },
});

export default styles;
