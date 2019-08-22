import {Platform} from 'react-native';
import Constants from './app-constant';

export default class Utility {
  static isAndroid() {
    return Platform.OS !== Constants.platform_iOS;
  }
}
