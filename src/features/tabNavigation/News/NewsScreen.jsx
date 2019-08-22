
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../../utility/colors-constant';
import STRING_Constant from '../../../utility/string-constant';

export default class NewsScreen extends Component {

  static navigationOptions = () => ({
    title: STRING_Constant.NEWS,
    headerTintColor: Colors.tintColor,
    headerStyle: {
      backgroundColor: Colors.topNavigationColor
    }
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to NewsScreen !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
