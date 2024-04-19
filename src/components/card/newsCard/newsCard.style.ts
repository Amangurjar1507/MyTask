import {StyleSheet} from 'react-native';
import color from '../../../theme/color';

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal:10,
    paddingVertical:10,
    marginBottom: 13,
     shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius:5
  },
  contentContainer: {
    flex: 1,
     marginLeft:13
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color:color.black,
    lineHeight:22,
   },
  description: {
    fontSize: 14,
    color: color.textGray,
    fontWeight: '300',
    lineHeight:20,
  },

});
