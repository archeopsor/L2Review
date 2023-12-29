import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';
import axios from 'axios';

// Box for user to input response to prompt
const InputBox = ({}) => {

    const [text, setMsg] = React.useState('');

    function submitMsg() {
      // Post text to backend
      axios.post('http://localhost:5000/process_text', {language: "Detect Language", text: text})
      .then((res) => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  
    return (
      <View>
        <TextInput 
          style={styles.input} 
          multiline={true}
          onChangeText={setMsg} 
          placeholder="Start typing here" 
          value={text}
          onKeyPress={
            (event) => {
              if (event.nativeEvent.key === 'Enter') {
                submitMsg();
              }
            }}></TextInput>
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