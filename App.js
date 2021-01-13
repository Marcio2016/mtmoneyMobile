import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button, FlatList} from 'react-native';

const App = () => {
  const addEntry = () => {
    alert('Indo para tela de lançamentos');
  };

  let data = [
    {key: 'Combustivel: R$200'},
    {key: 'Aluguel: R$120'},
    {key: 'Lazer: R$250'},
    {key: 'Alimentação: R$700'},
  ];
  let dataUltimos = [
    {key: 'Padaria: R$10'},
    {key: 'Supermercado: R$190'},
    {key: 'Posto: R$100'},
  ];

  return (
    <>
      <SafeAreaView style={styles.Container}>
        <Text style={styles.saldoText}>Saldo: R$ 5.102,45</Text>
        <Button title="Adicionar" onPress={addEntry} />

        <Text style={styles.saldoText}>Categorias</Text>
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />

        <Text style={styles.saldoText}>Últimos Lançamentos</Text>
        <FlatList
          data={dataUltimos}
          renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 10,
  },
  saldoText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default App;
