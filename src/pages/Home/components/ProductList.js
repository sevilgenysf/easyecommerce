/* eslint-disable react/react-in-jsx-scope */
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import ProductCard from './ProductCard';

let {width} = Dimensions.get('window');

const ProductsCard = ({item}) => {
  return (
    <TouchableOpacity style={{width: '50%'}}>
      <View style={{width: width / 2, backgroundColor: 'gainsboro'}}>
        <ProductCard {...{item}} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export default ProductsCard;
