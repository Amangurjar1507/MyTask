import {StyleSheet} from 'react-native';
import color from '../../../theme/color';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: color.buttonColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  lableView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lableStyle: {
    marginLeft: 15,
    fontWeight: '400',
    fontSize: 26,
    color: color.white,
     textAlign: 'center',
  },
});
