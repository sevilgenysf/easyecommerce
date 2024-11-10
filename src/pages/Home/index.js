/* eslint-disable react/react-in-jsx-scope */
import axios from 'axios';
import react, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Text,
  ScrollView,
} from 'react-native';
import ProductList from './components/ProductList';
import CategoryFilter from './components/CategoryFilter';

import {TopHeader} from '@components';
import {SearchBar} from '@components';
import {useMMKVObject} from 'react-native-mmkv';
import {Banner} from '@components';

const Produtcs = () => {
  const [products, setProducts] = useState([]);
  const [filteredProduct] = useMMKVObject('filtered_products');
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [active, setActive] = useState();
  const [initialState, setInitialState] = useState([]);
  const [productsCtg, setProductsCtg] = useState([]);

  // Tüm title değerlerini bir array'e pushlamak
  const filteredProducts = products.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const renderItem = ({item}) => {
    return (
      <View style={styles.category}>
        <ProductList {...{item}} />
      </View>
    );
  };

  useEffect(() => {
    setProducts(products);
    setCategories(categories);
    setActive(-1);
    setInitialState(products);

    return () => {
      setProducts([]);
      setCategories([]);
      setActive();
      setInitialState();
    };
  }, []);

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

  // Categories

  const changeCtg = ctg => {
    {
      ctg === 'all'
        ? [setProductsCtg(initialState), setActive(true)]
        : [
            setProductsCtg(products.filter(i => i.category === ctg)),
            setActive(true),
          ];
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <TopHeader />
        <View>
          <Banner />
        </View>
        <View>
          <CategoryFilter
            categories={products}
            categoryFilter={changeCtg}
            productsCtg={productsCtg}
            active={active}
            setActive={setActive}
          />
        </View>
        <SearchBar data={setSearchTerm} />
        <FlatList
          numColumns={2}
          vertical
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          data={filteredProducts}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 10}}
          // ListHeaderComponent={<HeaderComponent />}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
