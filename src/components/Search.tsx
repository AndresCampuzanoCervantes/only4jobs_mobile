/* eslint-disable react-native/no-inline-styles */
import {Input} from 'native-base';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {default as Icon} from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../theme/appTheme';

const ViewSearch = (props: any) => {
  const onChange = (newSearch: string) => {
    props.setSearch(newSearch);
  };
  return (
    <View>
      <View style={styles.inputTextSearch}>
        <View
          style={{
            flexDirection: 'row',
            borderRadius: 10,
            alignItems: 'center',
          }}>
          <Input
            type="text"
            color="black"
            backgroundColor="blue.200"
            marginY={5}
            keyboardType="email-address"
            InputRightElement={
              <Icon
                name="search"
                size={24}
                color={colors.primary}
                style={{
                  backgroundColor: colors.tertiary,
                  padding: 5,
                  borderRadius: 5,
                }}
              />
            }
            placeholder="Buscar"
            onChangeText={text => onChange(text)}
            value={props.search}
          />
        </View>
      </View>
    </View>
  );
};

export default ViewSearch;

const styles = StyleSheet.create({
  //search
  inputTextSearch: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    borderColor: colors.primary,
    borderWidth: 2,
    marginTop: 1,
    marginBottom: 1,
    borderRadius: 60,
  },
  textSearch: {
    width: '90%',
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.tertiary,
    fontFamily: 'Poppins-Bold',
    marginLeft: 4,
    marginRight: 4,
  },
});
