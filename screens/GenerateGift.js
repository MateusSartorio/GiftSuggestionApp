import React, {useState} from 'react';
import Constants from 'expo-constants';
import { 
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  Platform,
  TextInput,
  TouchableOpacity,
  Picker,
} from 'react-native';

export default GenerateGift = () => {
  const [selectedValueFirstPicker, setSelectedValueFirstPicker] = useState(() => '');
  const [selectedValueSecondPicker, setSelectedValueSecondPicker] = useState(() => '');
  const [selectedValueThirdPicker, setSelectedValueThirdPicker] = useState(() => '');

  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <ImageBackground style={styles.backgroundImage} source={require('../assets/backgroundGenerateGift.jpg')}>

        <View style={styles.topTextContainer}>
          <Text style={{fontSize: 25, paddingLeft: 20}}>Olá de novo Ronivaldo!</Text>
          <Text style={{fontSize: 18, padding: 10}}>Vamos lá! Nos conte um pouco sobre seu amigo!</Text>
        </View>

        <View style={styles.entryDataContainer}>
          <View style={styles.inputContainer}>
              <TextInput
                placeholder='Nome'
                style={styles.input}
              />
          </View>

          <View style={styles.pickerContainer}>
            <Picker 
              style={styles.picker}
              selectedValue={selectedValueFirstPicker}
              onValueChange={(itemValue, itemIndex) => setSelectedValueFirstPicker(itemValue)}
            >
              <Picker.item label='Gosto Musical' value='' />
              <Picker.item label='Rock' value='rock' />
              <Picker.item label='Sertanejo' value='sertanejo' />
              <Picker.item label='Eletrônica' value='eletronica' />
              <Picker.item label='Funk' value='funk' />
              <Picker.item label='Indie' value='indie' />
              <Picker.item label='Clássica' value='classica' />
            </Picker>
          </View>

          <View style={styles.pickerContainer}>
            <Picker 
              style={styles.picker}
              selectedValue={selectedValueSecondPicker}
              onValueChange={(itemValue, itemIndex) => setSelectedValueSecondPicker(itemValue)}
            >
              <Picker.item label='Tipo de Filme' value='' />
              <Picker.item label='Suspense' value='suspense' />
              <Picker.item label='Romance' value='romance' />
              <Picker.item label='Ação' value='acao' />
              <Picker.item label='Terror' value='terror' />
              <Picker.item label='Aventura' value='aventura' />
            </Picker>
          </View>

          <View style={styles.pickerContainer}>
            <Picker 
              style={styles.picker}
              selectedValue={selectedValueThirdPicker}
              onValueChange={(itemValue, itemIndex) => setSelectedValueThirdPicker(itemValue)}
            >
              <Picker.item label='Comida Preferida' value='' />
              <Picker.item label='Chocolate' value='chocolate' />
              <Picker.item label='Salgado' value='salgado' />
              <Picker.item label='Bolo' value='Bolo' />
              <Picker.item label='Strogonoff' value='strogonoff' />
            </Picker>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Gerar Presente!</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: Platform.OS == 'android' ? Constants.StatusBarHeight : 60,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  topTextContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 60,
    width: '80%',
    backgroundColor: '#161a1d',
    borderRadius: 10,
    padding: 10,
  },
  entryDataContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  pickerContainer: {
    backgroundColor: '#161a1d',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 60,
    marginTop: '7%',
    borderRadius: 10,
  },
  picker: {
    width: '80%',
    color: '#fff',
  },
  pickerText: {
    fontSize: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#560bad',
    width: '50%',
    height: 70,
    borderRadius: 10,
    marginTop: '10%',
  },
  textButton: {
    fontSize: 25,

  }
});