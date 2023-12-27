import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CategoryBox from './category_box';

/* Track different screens */
const Screen = ({}) => {
  
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
  });
  
  export default Screen;