import { StyleSheet, Text, View } from 'react-native';

export default function Category_boxegories() {
  return (
    <View style={styles.container}>
      <Text>Title</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});