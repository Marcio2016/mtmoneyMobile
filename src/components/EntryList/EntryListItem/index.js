import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

const EntryListItem = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.label}>Outros lançamentos</Text>
      <FlatList
        data={[
          {key: 'Alimentção: R$ 100'},
          {key: 'Lazer: R$ 80'},
          {key: 'Farmacia: R$ 57'},
          {key: 'Outros: R$ 64'},
        ]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    // flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default EntryListItem;
