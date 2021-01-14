import React from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

const EntrySummaryList = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.label}>Catergorias</Text>
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
  label: {fontWeight: 'bold', fontSize: 18},
});

export default EntrySummaryList;
