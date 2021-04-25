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
  Keyboard,
  ImageBackground,
} from 'react-native';

export default Login = ({navigation}) => {
  // size for logo image
  const sizeLogo = {
    x: 200,
    y: 300,
  };

  // states
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 100}));
  const [opacity] = useState(new Animated.Value(0));
  const [imageLogo] = useState(new Animated.ValueXY({x: sizeLogo.x, y: sizeLogo.y}));
  const [name, setName] = useState(() => '');
  const [password, setPassword] = useState(() => '');

  // function to go to Home page
  function goToHomePage() {
    navigation.reset({
      index: 0,
      routes: [{ 
        name: 'Home', 
        params: {nameUser: name}
      }],
    });
  }

  // function to save name from textinput
  function handleName(name) {
    setName(name);
  }

  // function to save password from textinput
  function handlePassword(password) {
    setPassword(password);
  }

  // deal with lifecycle of the app
  useEffect(() => {
    // keyboard listners
    keyboardDidShowListner = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListner = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    // animations 
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300
      })
    ]).start();
  }, []);

  // adjust image when keyboard is open
  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(imageLogo.x, {
        toValue: 100,
        duration: 200
      }),
      Animated.timing(imageLogo.y, {
        toValue: 150,
        duration: 200
      })
    ]).start();
  }

  // adjust image when keyboard has been closed
  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(imageLogo.x, {
        toValue: sizeLogo.x,
        duration: 200
      }),
      Animated.timing(imageLogo.y, {
        toValue: sizeLogo.y,
        duration: 200
      })
    ]).start();
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <ImageBackground style={styles.backgroundLogin} source={require('../assets/backgroundLogin.jpg')}>
        <View style={styles.containerLogo}>
          <Animated.Image 
            style={{
              height: imageLogo.x,
              width: imageLogo.y,
              borderRadius: 10,
            }}
            source={require('../assets/logo.jpg')}
          />
        </View>

        <Animated.View 
          style={[
            styles.mainContainer, {
              opacity: opacity,
              transform: [ {
                translateY: offset.y
              }]
            }
          ]}
        >
          <TextInput
            style={styles.input}
            placeholder='e-mail'
            autocorrect={false}
            onChangeText={(text) => handleName(text)}
          />

          <TextInput
            style={styles.input}
            placeholder='password'
            autocorrect={false}
            secureTextEntry={true}
            onChangeText={(text) => handlePassword(text)}
          />

          <TouchableOpacity 
            style={styles.buttonSubmit}
            onPress={goToHomePage}
          >
            <Text style={styles.submitText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonCreateAccount}>
            <Text style={styles.buttonCreateAccountText}>Create Account</Text>
          </TouchableOpacity>
        </Animated.View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#52bdcb',
    marginTop: Constants.StatusBarHeight,
  },
  backgroundLogin: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 16,
    borderRadius: 8,
    padding: 12,
  },
  buttonSubmit: {
    backgroundColor: '#0c1731',
    width: '90%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  submitText: {
    color: '#fff',
    fontSize: 19,
  },
  buttonCreateAccount: {
    marginTop: 15,
  },
  buttonCreateAccountText: {
    color: '#fff',
    fontSize: 16,
  }
});
