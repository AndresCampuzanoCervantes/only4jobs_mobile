/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Image, ScrollView} from 'native-base';
import {colors} from '../../theme/appTheme';

const Profile = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '15/04/2023',
  });
  const [contactInfo, setContactInfo] = useState({
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    country: 'United States',
  });

  const handleEditPress = () => {
    // Aquí podrías navegar a una pantalla de edición separada
    // o mostrar un modal de edición en la misma pantalla
    console.log('Editar datos');
  };

  return (
    <ScrollView style={{backgroundColor: colors.primary}}>
      <View style={styles.container}>
        <Image
          source={require('../../resource/image/ONLY4Jobs-icon-white.png')}
          style={{
            height: 210,
            marginTop: 20,

            width: 220,
            margin: 70,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        />

        <Text style={styles.header}>Perfil de usuario</Text>

        <View style={styles.section}>
          <Text style={styles.title}>Información personal:</Text>
          <Text
            style={{
              fontSize: 18,
            }}>
            Nombre: {personalInfo.firstName}
          </Text>
          <Text
            style={{
              fontSize: 18,
            }}>
            Apellido: {personalInfo.lastName}
          </Text>
          <Text
            style={{
              fontSize: 18,
            }}>
            Fecha de nacimiento: {personalInfo.dateOfBirth}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Datos del contacto:</Text>
          <Text
            style={{
              fontSize: 18,
            }}>
            Correo: {contactInfo.email}
          </Text>
          <Text
            style={{
              fontSize: 18,
            }}>
            Teléfono: {contactInfo.phone}
          </Text>
          <Text
            style={{
              fontSize: 18,
            }}>
            País: {contactInfo.country}
          </Text>
        </View>

        <TouchableOpacity onPress={handleEditPress} style={styles.button}>
          <Text style={styles.buttonText}>Editar datos</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const setPersonalInfo = (firstName: string, lastName:string, dateOfBirth: string) => {
  setPersonalInfo(
    firstName,
    lastName,
    dateOfBirth
  );
};

const setContactInfo = (email:string, phone: string, country:string) => {
  setContactInfo(email,phone,country);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    alignItems: 'center',
  },
  header: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#279ed9',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Profile;
