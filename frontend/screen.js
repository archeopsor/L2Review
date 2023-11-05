import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import CategoryBox from './frontend/category_box';

/* Track different screens */
const Screen = ({}) => {
  
    return (
      <View></View>
    );
  }
  
  const styles = StyleSheet.create({
    text: {
      color: 'white',
    },
    screen: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
  });
  
  export default Screen;