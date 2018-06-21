import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
    } from "react-native";

class WelcomeScreen extends Component{
    static navigationOptions = {
        header : null
    }
    render(){
        return (
            <View style={styles.container}>
                <Button 
                    title='Login'
                    onPress={()=> this.props.navigation.navigate('LoginScreen')}/>
                <Button 
                    title='SignUp'
                    onPress={()=> this.props.navigation.navigate('SignupScreen')}/>
            </View>
        );
    }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
    }
});