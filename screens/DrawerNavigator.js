import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";
import { createDrawerNavigator, createStackNavigator } from 'react-navigation'
import HomeScreen from "./HomeScreen";
//import HomeScreenTabNavigator from './HomeScreenTabNavigator';
import AppTabNavigator from "./HomeScreenTabNavigator";

const InnerStackNavigator = new createStackNavigator({
    TabNavigator: {
        screen: AppTabNavigator
    }
})

const AppDrawerNavigator = new createDrawerNavigator ({
    HomeScreen : {screen: InnerStackNavigator},
})
export default AppDrawerNavigator;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});