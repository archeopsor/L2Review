import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

// Box for user to input response to prompt
const InputBox = ({}) => {

    const [text, textChange] = React.useState('');
  
    return (
      <View>
        <TextInput 
          style={styles.input} 
          onChangeText={textChange} 
          placeholder="Start typing here" 
          value={text}></TextInput>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    text: {
      color: 'white',
    }, 
    input: {
        height: 500,
        width: 300,
        borderRadius: 10,
        backgroundColor: 'white',
        textAlignVertical: 'top',
        textAlign: 'left',
    },
  });
  
  export default InputBox;