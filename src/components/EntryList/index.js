import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import EntryListItem from './EntryListItem';

const EntryList = ({entries}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Últimos Lançamentos</Text>
      <FlatList
        data={entries}
        renderItem={({item}) => (
          <Text style={styles.entry}>
            - {item.description} - ${item.amount}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    // flex: 1,
    // alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntryList;
