import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

const EntryListItem = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.label}>EntryListItem</Text>
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
