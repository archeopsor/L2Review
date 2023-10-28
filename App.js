import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoryBox from './frontend/category_box';

export default function App() {

  const food = {
    backgroundclass: "bg_red"
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>L2Review</Text>
      <StatusBar style="light" />

      <CategoryBox></CategoryBox>
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
  text: {
    color: 'white',
  }
});
