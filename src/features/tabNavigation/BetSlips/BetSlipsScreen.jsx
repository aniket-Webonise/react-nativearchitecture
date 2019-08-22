
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../../../utility/colors-constant';
import STRING_CONSTANTS from '../../../utility/string-constant';

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

export default class BetSlipsScreen extends Component {

  static navigationOptions = () => ({
    title: STRING_CONSTANTS.BETSLIPS,
    headerTintColor: Colors.tintColor,
    headerStyle: {
      backgroundColor: Colors.topNavigationColor,
    },
  });

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to BetSlips !</Text>
      </View>
    );
  }
};
