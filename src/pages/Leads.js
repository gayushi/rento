import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from 'react-native';
export default class Leads extends Component<{}>{

  render(){

     return (
     	<View>
     		<View style={{flexDirection: 'row'}}>
     		 	<Text> Total </Text>
     		 	<TouchableOpacity> 
     		 	<Text> ADD NEW </Text>
     		 	</TouchableOpacity>
     		</View>
     		 <FlatList  
		         data={[
		            {key: 'EARNINGS'},
		            {key: 'MY LEADS'},
		            {key: 'OFFERS'},
		            {key: 'ADD NEW LEAD'}
		            ]}
		            renderItem={({item}) => <Text style = {styles.item}>{item.key}</Text>}
		         ItemSeparatorComponent = {this.renderSeparator}
		        />
		        </View>
		        )
				 }
				}




