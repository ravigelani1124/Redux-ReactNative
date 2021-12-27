import {ColorPropType, StyleSheet} from 'react-native';
import Color from '../../utils/color';

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
  },
  input: {
    marginHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 8,
    borderColor: Color.black,
    fontSize: 16,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    paddingVertical: 2,
    marginBottom: 10,
  },
  pContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.black,
    borderRadius: 10,
  },
  tTitle: {
    color: Color.white,
  },
});

export default styles;
