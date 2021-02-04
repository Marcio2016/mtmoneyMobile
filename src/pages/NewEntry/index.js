import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

import {saveEntry} from '../../services/Entries';

const NewEntry = ({navigation}) => {
  const currentBalance = 2065.35;
  const [amount, setAmount] = useState('0.00');

  const save = () => {
    const value = {
      amount: parseFloat(amount),
    };
    saveEntry(value);
  };

  return (
    <View sytle={styles.container}>
      <BalanceLabel currentbalance={currentBalance} />
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setAmount(text)}
          value={amount}
        />
        <TextInput style={styles.input} />
        <Button title="camera" />
        <Button title="GPS" />
        <Button title="Add" onPress={save} />
        <Button title="cancel" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginBottom: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
export default NewEntry;
