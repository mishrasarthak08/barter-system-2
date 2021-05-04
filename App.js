import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import SignUpLoginScreen from "./screens/signuploginscreen"
import firebase from 'firebase'
import db from './config'

export default class App extends React.Component{
  render(){
    return(
    <SignUpLoginScreen />
    )
  }
}