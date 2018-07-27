import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput
} from 'react-native';

import Form from '../components/Form';
import {
  Actions
} from 'react-native-router-flux';

export default class SignUp extends Component<{}> {
  // login(){
  //   Actions.login()
  // }
  render() {
    return (
      <View style = {styles.container}>
      <View style = {styles.container}>
      <Text style = {{fontSize: 24,fontWeight:"600"}}> Create a new Account </Text>
      </View>
          <Text style = {styles.ntext}> User Name </Text>
                  <TextInput style ={styles.input}
                   underlineColorAndroid= 'rgba(0,0,0,0)' 
                   placeholder="ex:-abc@gmail.com"
                   />
          <Text style = {styles.ntext}> Enter the password </Text>
                <TextInput style ={styles.input} 
                   underlineColorAndroid= 'rgba(0,0,0,0)'
                   placeholder="Password"
                   secureTextEntry={true}/>

          <Text style = {styles.ntext}> Re-enter the password </Text>
                 <TextInput style ={styles.input} 
                   underlineColorAndroid= 'rgba(0,0,0,0)'
                   placeholder="Password"
                   secureTextEntry={true}/>

      <View style={styles.vsign}>
          <Text style = {styles.text}>Have an account? 
          </Text>
        <TouchableOpacity onPress= {() => Actions.login()}>
          <Text style = {styles.signUp}>
           Sign In 
          </Text>
          </TouchableOpacity>
       </View>       
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor : '#c4001d',
    flexGrow : 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
    
  },
  vsign:{
    flexGrow : 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
      },
  signUp:{
     fontSize: 20,
     fontWeight:"200",
     color: '#ffffff'
      },
  text:{
    color: 'rgba(255,255,255,0.5)',
    fontSize: 16
  },
  ntext:{
    fontWeight:"200",
    fontSize: 16
  },
  input: {
      width: 200,
      backgroundColor: 'rgba(255,255,255,0.2)',
      marginVertical: 20,
      borderRadius:30,
      paddingHorizontal: 20
  },
});
