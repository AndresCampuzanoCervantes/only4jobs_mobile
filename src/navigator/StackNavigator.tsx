import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/login';
import Register from '../screens/login/register';
import Profile from '../screens/user_profile/Profile';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={Profile} />
      <Stack.Screen name="registro" component={Register} />
      <Stack.Screen name="recuperar-contraseña" component={Login} />
      <Stack.Screen name="home" component={Login} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default StackNavigator;
