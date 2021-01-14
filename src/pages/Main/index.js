import React from 'react';
 import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';

const Main = () => {
  
  return (
    <View>
      <BalancePanel/>
      <EntrySummary/>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
  }
});


export default Main;