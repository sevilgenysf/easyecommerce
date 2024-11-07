import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';

const TopHeader = () => {
  return (
    <SafeAreaView>
      <Text style={{color: 'white'}}>Merhaba</Text>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/256/5486/5486145.png',
        }}
        style={{width: 50, height: 50, alignSelf: 'center'}}
      />
    </SafeAreaView>
  );
};

export default TopHeader;
