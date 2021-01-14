import React from 'react';
import { View, StyleSheet,Picker ,Button} from 'react-native';

import EntryLabel from '../../components/BalanceLabel'
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
  return (
  <View style={styles.container}>
    <EntryLabel/>
    <View>
      <Picker>
        <Picker.item label='Todas as categorias'/>
      </Picker>
      <Picker>
        <Picker.item label='Últimos 7 dias'/>
      </Picker>
    </View>
    <EntrySummary/>
    <EntryList/>
    <View>
      <Button title='adicionar'/>
      <Button title='cancelar'/>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
});

export default Report;