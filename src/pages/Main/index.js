import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Main = ({navigation}) => {
  const onNewEntry = () => {
    navigation.navigate('NewEntry');
  };
  const saldo = 10.0;
  const data = [
    {key: 'Alimentção: R$ 100'},
    {key: 'Lazer: R$ 80'},
    {key: 'Farmacia: R$ 57'},
    {key: 'Outros: R$ 64'},
  ];
  return (
    <View style={styles.Container}>
      <BalancePanel currentBalance={saldo} />
      <Button title="Adicionar" onPress={onNewEntry} />
      <EntrySummary />
      <EntryList />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    // flex: 1,
    padding: 10,
  },
});

export default Main;
