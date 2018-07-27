import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

// import SplashScreen from 'react-native-splash-screen';
 import Login from './src/pages/Login';
 import SignUp from './src/pages/SignUp';
// import Demo from './src/pages/Demo';
// import Home from './src/pages/Home';
import Navigate from './src/Navigate';
import NewLead from './src/pages/NewLead';
import Leads from './src/pages/Leads';
import {Router, Scene, Stack} from 'react-native-router-flux';

export default class App extends Component<{}> {
  // componentDidMount() {
  //   SplashScreen.hide()}
    
  render() {
    return (
        <Router>
      <Stack key="root">
        <Scene 
          key="signUp"
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
// <View style = {styles.container}>
//             <StatusBar
//              backgroundColor="#9a0007"
//              barStyle="light-content"
//              />
//           <Login/>
            
//        </View>
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
  
});
