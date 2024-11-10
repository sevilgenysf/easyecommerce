import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, SafeAreaView, LogBox} from 'react-native';
import {ARROW_LEFT} from '@assets';
import {Products} from '@pages';

LogBox.ignoreAllLogs(true);

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
