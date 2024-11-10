import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  View,
} from 'react-native';

const CategoryFilter = props => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      scrollEnabled
      bounces={true}
      horizontal={true}
      style={{backgroundColor: '#f2f2f2'}}>
      <TouchableOpacity
        key={1}
        style={styles.center}
        onPress={() => {
          props.categoryFilter('all'), props.setActive(-1);
        }}>
        <View
          style={[
            styles.center,
            {margin: 5},
            props.active == -1 ? styles.active : styles.inactive,
          ]}>
          <Text>All</Text>
        </View>
      </TouchableOpacity>
      {props.categories.map(item => (
        <TouchableOpacity
          key={item.id}
          style={styles.center}
          onPress={() => {
            props.categoryFilter(item.id),
              props.setActive(props.categories.indexOf(item));
          }}>
          <View
            style={[
              styles.center,
              {margin: 5},
              props.active == props.categories.indexOf(item)
                ? styles.active
                : styles.inactive,
            ]}>
            <Text>{item.category}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {backgroundColor: '#03bafc'},
  inactive: {backgroundColor: '#a0e1eb'},
});

export default CategoryFilter;
