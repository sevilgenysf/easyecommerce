import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, StyleSheet} from 'react-native';
import {useMMKVObject, useMMKVString} from 'react-native-mmkv';

// const DATA = [
//   "Apple",
//   "Banana",
//   "Cherry",
//   "Date",
//   "Grape",
//   "Kiwi",
//   "Lemon",
//   "Mango",
//   "Orange",
//   "Peach",
//   "Pineapple",
//   "Strawberry",
//   "Watermelon",
// ];

const SearchBar = ({data}) => {
  const [search, setSearch] = useState('');

  const [filteredProduct, setFilteredProduct] =
    useMMKVObject('filtered_products');

  const handleSearch = text => {
    setSearch(text);
    if (text) {
      const newData = data.filter(item =>
        item.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredProduct(newData);
    } else {
      data;
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={search}
        onChangeText={text => handleSearch(text)}
      />
      <FlatList
        data={filteredProduct}
        keyExtractor={item => item}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 60,
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

export default SearchBar;
