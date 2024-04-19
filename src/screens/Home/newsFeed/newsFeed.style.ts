import {StyleSheet} from 'react-native';
import color from '../../../theme/color';

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: color.black,
  },
  container: {
    flex: 1,
    paddingTop: 12,
    marginHorizontal: 20,
  },
  buttonTextStyle: {
    fontWeight: '600',
    fontSize: 18,
    color: color.black,
    marginLeft: 10,
  },
  flatList: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  titleText: {
    marginLeft: 15,
    fontWeight: '400',
    fontSize: 26,
    color: color.buttonColor,
    textAlign: 'center',
    marginTop: 20,
  },
  titleMainView: {
    marginTop: 20,
  },
  cardView: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: color.white,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 13,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 120,
  },
  urlToImage: {
    width: 300,
    height: 300,
    borderRadius: 5,
  },
  textView: {
    marginLeft: 13,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 4,
    color: color.black,
    lineHeight: 22,
    marginTop: 20,
  },
  description: {
    fontSize: 18,
    color: color.textGray,
    fontWeight: '300',
    lineHeight: 20,
    marginTop: 18,
  },
  swipView: {
    marginTop: 20,
    position: 'absolute',
    bottom: 45,
  },
});

export default styles;
