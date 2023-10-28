import { StyleSheet, Text, View } from 'react-native';

export default function CategoryBox() {
  return (
    <View style={styles.container}>

      <Pressable onPress={() => alert('Box pressed')}>
        <Text>Title</Text>
      </Pressable>

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