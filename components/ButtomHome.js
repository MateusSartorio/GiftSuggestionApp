import React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default ButtomHome = ({text, height, width, color, icon}) => {
  const innerStyles = {
    height: height,
    width: width,
    backgroundColor: color,
  };

  return (
    <TouchableOpacity style={[styles.mainContainer, innerStyles]}>
      <Image style={{height: 50, width: 50}} source={icon}/>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    padding: 20,
  }
});