import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import DrawerNavigator from './screens/DrawerNavigator';

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = createStackNavigator({
  WelcomeScreen : {screen: WelcomeScreen},
  LoginScreen : {screen: LoginScreen},
  SignupScreen: {screen : SignupScreen},
  DrawerNavigator: {screen: DrawerNavigator,
    navigationOptions: {
      header: null
    }
  }
},{
  navigationOptions: {
    gesturesEnabled: false
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
