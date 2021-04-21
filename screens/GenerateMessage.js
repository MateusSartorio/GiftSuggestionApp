import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default GenerateMessage = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Generate Message</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});