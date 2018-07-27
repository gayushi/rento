import React, { Component } from 'react';
import {
  StyleSheet,
  } from 'react-native';

import {Router, Scene, Stack} from 'react-native-router-flux';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';

const App = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="signup"
          component={SignUp}
          title="SignUp"
          
        />
        <Scene
          key="login"
          component={Login}
          title="Login"
          initial
        />
      </Stack>
    </Router>
  );
}