/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React, { useContext } from 'react';
import { DrawerScreenProps, createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/home/Home';
import Job from '../screens/job/Job';
import Profile from '../screens/user_profile/Profile';
import { Text, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { UserContext } from '../context/Usuario';

const Drawer = createDrawerNavigator();

interface Props extends DrawerScreenProps<any, any> { }
interface PropsStack extends StackScreenProps<any, any> { }

const Logout = ({ navigation}: any) => {
  const { setSession } = useContext(UserContext);

  const exit = ()=>{
    setSession(null);
    navigation.replace('login');
  };

  return (
    <TouchableOpacity style={{ marginRight: 10 }} onPress={exit}>
      <Text>
        <Icons name="logout" size={25} color={colors.primary} />
      </Text>
    </TouchableOpacity>
  );
};

const Menu = ({ navigation }: any) => {
  return (
    <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.toggleDrawer()}>
      <Text>
        <Icons name="menu" size={25} color={colors.primary} />
      </Text>
    </TouchableOpacity>
  );
};

const DrawerNavigator = (propsStack:PropsStack) => {
  return (
    <Drawer.Navigator screenOptions={(props: Props) => ({
      headerRight: () => <Logout navigation={propsStack.navigation}/>,
      headerLeft: () => <Menu navigation={props.navigation} />,
    })}>
      <Drawer.Screen name="start" options={{ title: 'Inicio' }} component={Home} />
      <Drawer.Screen name="job" options={{ title: 'Trabajo' }} component={Job} />
      <Drawer.Screen name="profile" options={{ title: 'Perfil' }} component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
