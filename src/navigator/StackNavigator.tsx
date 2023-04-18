import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Login, RecoverPassword, Register} from '../screens/login/';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="registro" component={Register} />
      <Stack.Screen name="recuperar-contraseña" component={RecoverPassword} />
      <Stack.Screen name="home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default StackNavigator;
