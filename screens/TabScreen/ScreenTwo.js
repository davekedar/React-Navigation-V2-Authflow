import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
    } from "react-native";

class ScreenTwo extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Button title="Logout" onPress={()=> this.props.navigation.navigate('WelcomeScreen')} />
            </View>
        );
    }
}
export default ScreenTwo;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});