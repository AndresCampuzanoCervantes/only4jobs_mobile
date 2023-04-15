import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home/Home';
import Job from '../screens/job/Job';


const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=> {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="start" options={{title: 'Inicio'}} component={Home} />
      <Drawer.Screen name="job" options={{title: 'Trabajo'}} component={Job} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
