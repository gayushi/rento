import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import Form from '../components/Form';
import Home from './Home';
import{ Actions } from 'react-native-router-flux';


export default class Login extends Component<{}> {
  // signUp(){
       
  // }
  render() {
    return (
      <View style = {styles.container}>
            <Form/>
      <View style={styles.vsign}>
          <Text style = {styles.text}>Don't have an account? 
          </Text>
          <TouchableOpacity onPress={() => Actions.signUp()} >
          <Text style = {styles.signUp}> Sign Up 
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
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  vsign:{
    flexGrow : 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
      },
  signUp:{
     fontSize: 20,
     fontWeight: "200",
     color: '#ffffff'
      },
  text:{
    color: 'rgba(255,255,255,0.5)',
    fontSize: 16
  }
});



