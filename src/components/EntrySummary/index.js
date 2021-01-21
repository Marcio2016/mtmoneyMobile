import React from 'react';
import {View, StyleSheet} from 'react-native';

import EntrySummaryList from './EntrySummaryList';
import EntrySumaryChart from './EntrySumaryChart';

const EntrySummary = ({entriesGrouped}) => {
  return (
    <View style={styles.container}>
      <EntrySummaryList entriesGrouped={entriesGrouped} />
      <EntrySumaryChart />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default EntrySummary;
