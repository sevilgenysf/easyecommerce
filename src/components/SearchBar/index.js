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
  const [input, setInput] = useState('');

  const [filteredProduct, setFilteredProduct] =
    useMMKVString('filtered_products');

  const handleSearch = text => {
    setInput(text);
    data(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={input}
        onChangeText={handleSearch}
      />
    </View>
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
    marginBottom: 10,
    marginTop: 20,
  },
  item: {
    padding: 15,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default SearchBar;
