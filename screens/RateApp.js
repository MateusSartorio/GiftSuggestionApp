import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default RateApp = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Rate app</Text>
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