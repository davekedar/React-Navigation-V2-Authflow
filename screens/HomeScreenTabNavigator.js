import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
    } from "react-native";
import { createBottomTabNavigator } from 'react-navigation';
import ScreenOne from './TabScreen/ScreenOne';
import ScreenTwo from './TabScreen/ScreenTwo';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreenTabNavigator = new createBottomTabNavigator ({
    ScreenOne: {
        screen: ScreenOne,
        navigationOptions: {
            tabBarLabel: 'Feed',
            tabBarIcon: () => (
                <Ionicons name='md-compass' size={24} />
            )
        }
    },
    ScreenTwo: {
        screen: ScreenTwo,
        navigationOptions: {
            tabBarLabel: 'Setting',
            tabBarIcon: () => (
                <Ionicons name='md-compass' size={24} />
            )
        }
    }
})

export default HomeScreenTabNavigator;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});