/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Profile from '../screens/user_profile/Profile';
import Job from '../screens/job/Job';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../theme/appTheme';

const Tab = createMaterialBottomTabNavigator();

const ProfileBottomTabNavigator = () => {
  return (
    <Tab.Navigator activeColor="#00002345"
    barStyle={{ backgroundColor: colors.cuarsto }}>
      <Tab.Screen name="Datos"
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
      component={Profile} />
      <Tab.Screen name="Trabajos" options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="file-sign" color={color} size={26} />
          ),
        }}
        component={Job} />
    </Tab.Navigator>
  );
};

export default ProfileBottomTabNavigator;
