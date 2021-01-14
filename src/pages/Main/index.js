import React from 'react';
import {View, StyleSheet} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Main = () => {
  return (
    <View style={styles.Container}>
      <BalancePanel />
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
