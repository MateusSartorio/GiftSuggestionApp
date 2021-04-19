import React, {useState, useEffect} from 'react';
import Constants from 'expo-constants';
import { 
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard
} from 'react-native';

export default function App() { 
  return (
    <View style={styles.mainContainer}>
      <Text>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});
