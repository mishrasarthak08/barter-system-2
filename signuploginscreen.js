import React from 'react';
import { StyleSheet, Text, View, Image ,TextInput,KeyboardAvoidingView, Alert,TouchableOpacity,Modal, ScrollView} from 'react-native';
import db from "../config"
import firebase from 'firebase'

export default class SignUpLoginScreen extends React.Component {
  constructor(){
    super();
    this.state={
    email: "",
    password:''
    }
  }
  signingup=(email,password)=>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
        return Alert.alert("user added successfully")    
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  }
  loggingin=(email,password)=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
        return Alert.alert("successfully logged in")    

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
render(){
  return(
    <View style = {styles.container}>
        <Text style = {styles.title}>Barter system</Text>
    <TextInput placeholder = "email address" 
    keyboardType = {"email-address"} onChangeText = {(text)=>{
 this.setState({
email:text
 })
    }} style = {styles.loginBox}> 
    </TextInput>

    <TextInput placeholder = "password" onChangeText = {(text)=>{
 this.setState({
email:text
 })
    }} style = {styles.loginBox}> </TextInput>

<TouchableOpacity onPress = {()=>{
    this.loggingin(this.state.email,this.state.password)
}} style = {styles.button}>
<Text>LogIn</Text>
</TouchableOpacity>

<TouchableOpacity onPress = {()=>{
    this.signingup(this.state.email,this.state.password)
}} style = {styles.button}>
<Text>Sign Up</Text>
</TouchableOpacity>
    </View>
  )
}
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"lightblue",
        alignItems:"center",
        justifyContent: 'center'
    },
    title:{
        fontSize:65,
        fontWeight:"300",
        paddingBottom:30,
        color:"yellow"     
    },
    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor:"black",
        fontSize:20,
        paddingLeft:10,
        margin:10
    },
    button:{
        width:300,
        height:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:25,
        backgroundColor:"blue",
    },
    
})