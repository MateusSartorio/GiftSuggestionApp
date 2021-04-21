import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default TopGifts = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>Top gifts</Text>
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