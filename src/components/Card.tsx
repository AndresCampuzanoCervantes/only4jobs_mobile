import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Card = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../resource/image/Default_icon_profile.png')}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.category}>Categoría</Text>
        <Text style={styles.title}>Título</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Aceptar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    alignSelf: 'center',
    width: 380,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 13,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  category: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#aaa',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2196f3',
    padding: 8,
    borderRadius: 4,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Card;
