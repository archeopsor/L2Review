import { StyleSheet, Text, View, Pressable } from 'react-native';

const CategoryBox = ({}) => {
  return (
    <View style={styles.button}>

      {/* hobbies, travel, food, entertainment, ... */}
      <Pressable onPress={() => alert('Box pressed')}>
        <Text style={styles.text}>Give me a category!</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: '#4B9CD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  }
});

export default CategoryBox;