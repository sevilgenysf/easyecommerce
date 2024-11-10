import axios from 'axios';
import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import {useMMKVObject} from 'react-native-mmkv';

let {width} = Dimensions.get('window');

const ProductCard = ({item}) => {
  const [filteredProduct] = useMMKVObject('filtered_products');

  return (
    <View style={styles.container}>
      <Image
        source={{uri: item?.image}}
        resizeMode="contain"
        style={styles.image}
      />
      <View style={styles.card} />
      <Text style={styles.title}>
        {item?.title?.length > 15
          ? item?.title.substring(0, 12) + '...'
          : item?.title}
      </Text>
      <Text style={styles.price}>{item?.price}₺</Text>

      {item?.rating?.count > 0 ? (
        <View style={{marginTop: 10}}>
          <TouchableOpacity
            onPress={() => alert('Button Pressed')}
            style={{
              backgroundColor: 'green',
              padding: 10,
              borderRadius: 5,
              width: 60,
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>Add</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={{marginTop: 20}}>Currently Unavailable</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 2 - 20,
    height: width / 1.7,
    borderRadius: 10,
    elevation: 5,
    marginTop: 10,
    marginLeft: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: 'white',
  },
  image: {
    width: width / 2 - 20 - 30,
    height: width / 3 - 20 - 30,
    backgroundColor: 'transparent',
  },
  card: {
    marginBottom: 10,
    backgroundColor: 'transparent',
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  price: {
    fontSize: 20,
    color: 'orange',
  },
});

export default ProductCard;
