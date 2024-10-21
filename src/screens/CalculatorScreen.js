import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Display from '../components/Display';
import Button from '../components/Button';

const CalculatorScreen = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState(null);

  const handlePress = (value) => {
    if (value === 'AC') {
      setDisplay('');
      setResult(null);
    } else if (value === '=') {
      try {
        setResult(eval(display));
      } catch (error) {
        setResult('Erro');
      }
    } else {
      setDisplay(display + value);
    }
  };

  const buttons = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  return (
    <View style={styles.container}>
      <Display value={result !== null ? result : display} />
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((buttonValue) => (
              <Button
                key={buttonValue}
                label={buttonValue}
                onPress={() => handlePress(buttonValue)}
                isZero={buttonValue === '0'}
                special={buttonValue === 'AC' || buttonValue === '=' || ['+', '-', '*', '/'].includes(buttonValue)}
              />
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  },
  buttonsContainer: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});

export default CalculatorScreen;

