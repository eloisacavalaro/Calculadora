import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Display = ({ value }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    backgroundColor: '#000',
    padding: 20,
    alignItems: 'flex-end',
  },
  displayText: {
    color: '#fff',
    fontSize: 80, 
  },
});

export default Display;

