/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import Card from '../../components/Card';
import {colors} from '../../theme/appTheme';

const Home = () => {
  return (
    <ScrollView style={{backgroundColor: colors.primary}}>
      <Image
        source={require('../../resource/image/Logo.png')}
        style={{
          marginTop: 40,
          height: 80,
          width: 400,
          justifyContent: 'center',
          alignSelf: 'center',
        }}
      />

      <View>
        <Card />
      </View>
    </ScrollView>
  );
};

export default Home;
