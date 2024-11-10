import react, {useEffect, useLayoutEffect, useState} from 'react';
import {Image, StyleSheet, Dimensions, ScrollView, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

let {width} = Dimensions.get('window');

const Banner = () => {
  const [bannerData, setBannerData] = useState([]);

  useEffect(() => {
    setBannerData([
      'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg',
      'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
    ]);
    return () => {
      setBannerData([]);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.swiper}>
        <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={2}
          showPagination
          data={bannerData}
          renderItem={({item}) => (
            <View style={[styles.child, {backgroundColor: item}]}>
              <Image
                style={styles.imageBanner}
                resizeMode="contain"
                source={{uri: item}}
              />
            </View>
          )}
        />
        <View style={{height: 20}}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
  },
  swiper: {
    width: width,
    alignItems: 'center',
    marginTop: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 20,
    borderRadius: 10,
  },
});

export default Banner;
