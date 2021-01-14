import React from 'react';
import { View, Text,StyleSheet } from 'react-native';



const BalancePanelLabel = () => {
  return (
  <View style={styles.Container}>
    <Text style={styles.label}>Saldo Atual</Text>
    <Text style={styles.value}>R$ 10.000</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    alignItems: 'center',
  },
  label:{
    fontSize: 18,
  },
  value:{
    fontSize: 22,
  }
});
export default BalancePanelLabel;