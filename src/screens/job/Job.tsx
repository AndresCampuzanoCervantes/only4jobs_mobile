import {ScrollView} from 'native-base';
import React from 'react';
import {View} from 'react-native';
import {SearchBar} from 'react-native-screens';
import {colors} from '../../theme/appTheme';

const Job = () => {
  return (
    <ScrollView style={{backgroundColor: colors.primary}}>
      <View>
        <SearchBar />
      </View>
    </ScrollView>
  );
};

export default Job;
