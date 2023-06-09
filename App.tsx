import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import { NativeBaseProvider } from 'native-base';
import UserProvider from './src/context/Usuario';

const App = () => {
  return (
    <UserProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </UserProvider>
  );
};

export default App;
