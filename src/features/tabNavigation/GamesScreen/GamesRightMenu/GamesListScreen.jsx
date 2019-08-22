import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import STRING_CONSTANTS from '../../../../utility/string-constant';

export default class GameListScreen extends Component {

  static navigationOptions = ({navigation}) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: STRING_CONSTANTS.BETSLIPS,
      headerRight: (
        <Button
          onPress={() => navigation.dismiss()}
          title="Info"
          color="#fff"
        />
      )
    };
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to GameListScreen !</Text>
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
