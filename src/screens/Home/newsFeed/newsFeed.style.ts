import {StyleSheet} from 'react-native';
import color from '../../../theme/color';

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: color.black,
  },
  container: {
    flex: 1,
    paddingTop:12
  },
  buttonTextStyle: {
    fontWeight: '600',
    fontSize: 18,
    color: color.black,
    marginLeft: 10,
  },
  flatList: {
    marginTop: 40,
    marginHorizontal:20
  },
});

export default styles;
