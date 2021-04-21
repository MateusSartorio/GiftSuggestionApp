import React from 'react';
import Constants from 'expo-constants';
import { 
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ImageBackground,
  Platform
} from 'react-native';

import ButtomHome from '../components/ButtomHome';

export default Home = () => {
  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <ImageBackground style={styles.backgroundImage} source={require('../assets/backgroundHome.jpg')}>

        <View style={styles.messageContainer}>
          <Text style={styles.messageMainText}>Olá Ronivaldo, </Text>
          <Text style={styles.messageSecondaryText}>Lhe desejo uma ótima vida!</Text>
        </View>


        <View style={styles.buttonsContainer}>
          <ButtomHome 
            text='Presentear'
            width={160}
            height={160}
            color='#0ebe80' 
            icon={require('../assets/icons/gift.png')}
          />

          <ButtomHome text='Top Presentes'
            width={160}
            height={160}
            color='#0ebe80'
            icon={require('../assets/icons/bag.png')}
           />
        </View>

        <View style={[styles.buttonsContainer, {alignItems: 'flex-start'}]}>
          <ButtomHome text='Mensagem'
            width={160}
            height={160}
            color='#0ebe80'
            icon={require('../assets/icons/hearth.png')}
           />

          <ButtomHome text='Avaliar'
            width={160}
            height={160}
            color='#0ebe80'
            icon={require('../assets/icons/star.png')}
           />
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
  messageContainer: {
    flex: 0.4,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight + 40,
  },
  messageMainText: {
    fontSize: 40,
    padding: 5,
    color: '#fff',
  },
  messageSecondaryText: {
    fontSize: 23,
    padding: 3,
    alignSelf: 'center',
    color: '#fff',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
});