import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import CategoryBox from './frontend/category_box';

export default function App() {

  const MainStack = createStackNavigator();

  const HomeScreen = props => {
      return (
        <View style={styles.container}>
          <View style={styles.home}>

            <CategoryBox></CategoryBox>
          </View>

          <View style={styles.prompts}>
            <Text></Text>
          </View>
        </View>
      );
  };

  const NavBar = ({}) => {
      return (
      <NavigationContainer>
          <MainStack.Navigator>
              <MainStack.Screen name='home' component={HomeScreen} options={{
                  title: 'L2Review', headerTitleStyle: styles.head_text, headerTitleAlign: 'center', headerStyle: styles.header
              }}/>
          </MainStack.Navigator>
      </NavigationContainer>
      );
  }

  return (
    <SafeAreaView style={styles.sav}>
      <NavBar>
        <StatusBar style="light"/>
      </NavBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home: {
    display: 'show',
  },
  prompts: {
    display: 'hide',
  },
  head_text: {
    color: 'white',
    fontSize: 20,
  },
  header: {
      height: 80,
      backgroundColor: '#4B9CD3',
  },
  sav: {
    flex: 1,
    backgroundColor: 'black',
  }
});