import React, {useState} from 'react';
import {View, StyleSheet, Picker, Button} from 'react-native';

import EntryLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
  const [selectedValue, setSelectedValue] = useState('java');
  const currentBalance = 2065.35;

  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: 201},
    {key: '2', description: 'Combustível', amount: 12},
    {key: '3', description: 'Aluguel', amount: 120},
    {key: '4', description: 'Lazer', amount: 250},
    {key: '5', description: 'Outros', amount: 1200},
  ];

  const entries = [
    {key: '1', description: 'Padaria Asa Branca', amount: 10},
    {key: '2', description: 'Supermercado Isadora', amount: 190},
    {key: '3', description: 'Posto Ipiranga', amount: 290},
  ];

  return (
    <View>
      <EntryLabel currentbalance={currentBalance} />
      <View>
        <Picker
          selectedValue={selectedValue}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Todas Categorias" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Picker
          selectedValue={selectedValue}
          style={{height: 50, width: 150}}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Últimos 7 dias" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
      <View>
        <Button title="adicionar" />
        <Button title="cancelar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 2,
  // },
  // teste: {
  //   flex: 2,
  // },
});

export default Report;
