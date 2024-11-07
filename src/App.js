import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import {ARROW_LEFT} from '@assets';
import {Products} from '@pages';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Products />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  quicksandRegular: {
    fontFamily: 'Nunito-Black',
  },
});

export default App;
