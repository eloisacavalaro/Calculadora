import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ label, onPress, isZero, special }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isZero ? styles.buttonZero : null,
        special ? styles.specialButton : label.match(/[0-9]/) ? styles.numberButton : styles.functionButton
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.buttonText,
        !label.match(/[0-9]/) && styles.functionButtonText
      ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    width: 80,
    height: 80,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonZero: {
    width: 170, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 36,
  },
  specialButton: {
    backgroundColor: '#FF9500', 
  },
  numberButton: {
    backgroundColor: '#505050', 
  },
  functionButton: {
    backgroundColor: '#D4D4D2', 
  },
  functionButtonText: {
    color: '#000', 
  },
});

export default Button;

