import React, {useState} from 'react';
import {View, StyleSheet, Picker, Button} from 'react-native';

import EntryLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
  const [selectedValue, setSelectedValue] = useState('java');
  const saldo = 5.0;
  return (
    <View>
      <EntryLabel currentbalance={saldo} />
      <View>
        <Picker
          selectedValue={selectedValue}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Picker
          selectedValue={selectedValue}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
      <EntrySummary />
      <EntryList />
      <View>
        <Button title="adicionar" />
        <Button title="cancelar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  teste: {
    flex: 2,
  },
});

export default Report;
