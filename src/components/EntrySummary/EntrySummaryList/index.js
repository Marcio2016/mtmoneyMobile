import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

const EntrySummaryList = ({entriesGrouped}) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.label}>Catergorias</Text>
      <FlatList
        data={entriesGrouped}
        renderItem={({item}) => (
          <Text>
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
    alignItems: 'center',
  },
  label: {fontWeight: 'bold', fontSize: 18},
});

export default EntrySummaryList;
