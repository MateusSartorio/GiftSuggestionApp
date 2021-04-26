import React, {useState} from 'react';
import { KeyboardAvoidingView, Text, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Clipboard, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { State } from 'react-native-gesture-handler';

const generateMessageBackground = require('../assets/backgroundGenerateMessage.jpg');


export default GenerateMessage = ({navigation}) => {
  const [name, setName] = useState('');
  
  function goToMessage() {
    navigation.navigate('Mensagem', {friendName: name});
  }

  return (

    
        <KeyboardAvoidingView style = {{flex: 1}}>

          <ImageBackground source = {generateMessageBackground} style = {styles.background}>

          <Text style = {styles.text}>Gostaria de gerar uma mensagem para se amigue?</Text>
          <TextInput
            onChangeText = {(val) => setName(' ' + val)}
            style = {styles.textInput}
            placeholder = 'Nome de amigue'
            placeholderTextColor = '#d45b65'
          />
          <TouchableOpacity style = {styles.button} onPress = {goToMessage} >
            <Text style = {styles.buttonText}>Gerar</Text>
          </TouchableOpacity>

          </ImageBackground>

        </KeyboardAvoidingView>  

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    justifyContent: 'flex-start',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15,
    marginTop: 100,    
  },
  textInput: {
    height: 50,
    width: 320,
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 30,
    color: '#d45b65',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 17
  },
  button: {
    width: 150,
    height: 70,
    textAlign: 'center',
    backgroundColor: '#a11d33',
    paddingTop: 21,
    borderRadius: 10
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  }  
});