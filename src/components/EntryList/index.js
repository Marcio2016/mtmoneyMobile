import React from 'react';
import {View, StyleSheet} from 'react-native';
import EntryListItem from './EntryListItem';

const EntryList = () => {
  return (
    <View style={styles.Container}>
      <EntryListItem />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    // flex: 1,
    // alignItems: 'center',
  },
});

export default EntryList;
