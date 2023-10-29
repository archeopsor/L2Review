import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryBox from './frontend/category_box';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.home}>
        <Text style={styles.text}>L2Review</Text>
        <StatusBar style="light" />

        <CategoryBox></CategoryBox>
      </View>

      <View style={styles.prompts}>
        <Text></Text>
      </View>
      
    </View>
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
  text: {
    color: 'white',
  }
});
