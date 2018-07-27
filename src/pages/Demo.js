import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  // Image,
  // FlatList
} from 'react-native';

export default class Demo extends Component<{}> {
	render(){
		return(
			<View style = {styles.container}>
				<View >
					<Text style = {styles.content}> EARNINGS </Text>
				</View>

				<View>
					<Text style = {styles.content}> MY LEADS </Text>
				</View>

				<View >
					<Text style = {styles.content}> OFFERS </Text>
				</View>

				<View>
					<Text style = {styles.content}> ADD NEW LEAD </Text>
				</View>
			</View>


			);
		}
	};
	const styles = StyleSheet.create({
  container: {
    backgroundColor : '#c4001d',
    flex : 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 22
  },
  // item: {
     
  //   height: 50,
  //   width: 66,
  //   // flex : 1,
  //   // flexDirection: 'column',
  //   // justifyContent: 'space-between',
  //      },
  content: {
  	padding: 10,
  	fontSize: 28,
  	alignItems: 'center',
  	justifyContent: 'center'
  }
  });