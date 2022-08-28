import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Image, Text, Dimensions } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [result, setData] = useState('');
    

  const buttonPressed = () => { 
    const result = Number(text)+Number(text2);
    setData(result);
  };
  const buttonPressed2 = () => { 
    const result = Number(text)-Number(text2);
    setData(result);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: 'https://th.bing.com/th/id/OIP.vumzh-lDnQ6Bgr6rp1NzkAHaHa?w=209&h=209&c=7&r=0&o=5&dpr=1.5&pid=1.7'}} />
      <Text >Result: {result} </Text>
        <TextInput 
          style={styles.input} 
          keyboardType={'numeric'}
          placeholder="enter a number"
          onChangeText={text => setText(text)} value={text}
        />
        <TextInput 
          style={styles.input}
          keyboardType={'numeric'}
          placeholder="enter a number"
          onChangeText={text2 => setText2(text2)} value={text2}
        />
        <View style={{ width:Dimensions.get("window").width * 0.2, flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 10 }}>
          <Button onPress={buttonPressed} title="+" />
          <Button onPress={buttonPressed2} title="-" />
        </View>
        
        
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
  image : {
    width: 250,
    height: 100,
    marginTop: 10,
    marginBottom: 10
    
  },
  input : {
    width:200, 
    borderColor: 'gray', 
    borderWidth: 1,
    
  },
  
   
});