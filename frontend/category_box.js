import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import InputBox from './input_box';

const CategoryBox = ({}) => {

  const [visible, setVisibility] = useState(true);

  const getCategory = () => {
    setVisibility(false)
  }

  return (
    <View>

      {/* hobbies, travel, food, entertainment, ... */}
      { visible ?

      <View style={styles.button}>
        <Pressable onPress={() => getCategory()}>
          <Text style={styles.text}>Give me a category!</Text>
        </Pressable>
      </View> : 
      <View style={styles.input}>
        <InputBox></InputBox>
      </View>

      }
      
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 200,
    width: 200,
    borderRadius: 10,
    backgroundColor: '#4B9CD3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  blank: {
    backgroundColor: 'black',
    height: 0,
    width: 0,
  },
  text: {
    color: 'white',
  }
});

export default CategoryBox;