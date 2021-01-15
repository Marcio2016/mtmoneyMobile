import React from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

const NewEntry = ({navigation}) => {
  return (
    <View sytle={styles.container}>
      <BalanceLabel />
      <View>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
        <Button title="camera" />
        <Button title="GPS" />
        <Button title="Add" />
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
