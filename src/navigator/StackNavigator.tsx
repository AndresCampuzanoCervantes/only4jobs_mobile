import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/home/Home';
import Job from '../screens/job/Job';
import {Login} from '../screens/login/';
import Register from '../screens/login/register';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="registro" component={Register} />
      <Stack.Screen name="recuperar-contraseña" component={Login} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="job" component={Job} />
    </Stack.Navigator>
  );
};

//make this component available to the app
export default StackNavigator;
