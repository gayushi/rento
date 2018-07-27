import React, { Component } from 'react';
import {
  StyleSheet,
  } from 'react-native';

import {Router, Scene, Stack} from 'react-native-router-flux';
import Login from './pages/Login';
import SignUp from './pages/SignUp';


export default class Navigate extends Component<{}>{

  render(){

     return (
     <Router>
      <Stack key="root">
        <Scene 
          key="signUp"
          component={SignUp}
          title="SignUp"
          initial
        />
        <Scene
          key="login"
          component={Login}
          title="Login"
          
        />
      </Stack>
    </Router>
  );
}
}