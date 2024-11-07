/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import react, {useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, TextInput, Text} from 'react-native';
import ProductList from './components/ProductList';

import {TopHeader} from '@components';
import {SearchBar} from '@components';
import {useMMKVObject} from 'react-native-mmkv';

const Produtcs = () => {
  const [products, setProducts] = useState([]);
  const [filteredProduct] = useMMKVObject('filtered_products');

  // Tüm title değerlerini bir array'e pushlamak
  const titlesArray = products.map(item => item.title);

  const renderItem = ({item}) => {
    return (
      <View style={styles.category}>
        <ProductList {...{item}} />
      </View>
    );
  };
  useEffect(() => {
    axios
      .get(
        'https://fakestoreapi.com/products',
      ) /* ?limit=5 sorulacak(sınırlı sayıda data çekince, bulamıyor.) */
      .then(res => {
        setProducts(res.data);
      })
      .catch(e => {
        console.log(e);
      });
    return () => {
      setProducts([]);
    };
  }, []);

  return (
    <View>
      <Text>{JSON.stringify(products.title, null, 2)}</Text>
      <TopHeader />
      <SearchBar data={titlesArray} />
      <FlatList
        numColumns={2}
        vertical
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        data={products}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  item: {
    padding: 15,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default Produtcs;
