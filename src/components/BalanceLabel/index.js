import React from 'react';
import { View,Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

const BalanceLabel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>R$ 20.000</Text>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  //flex:1,
// justifyContent: 'center',
alignItems: 'center',
},
label:{
  fontSize: 18,
  fontWeight: 'bold'
},
value:{
  fontSize: 22,
  fontWeight: 'bold'
}
})
export default BalanceLabel;