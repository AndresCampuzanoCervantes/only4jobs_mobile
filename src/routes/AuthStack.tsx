import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import Login from "../Screens/Login"
import Registro from "../Screens/Registro/Registro"
import SplashScreen from "../SplashScreen"

const AuthScreen = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <AuthScreen.Navigator
            initialRouteName="Splash"
            screenOptions={{ headerShown: false }}>
            <AuthScreen.Screen name="Login" component={Login} />
            <AuthScreen.Screen name="Register" component={Registro} />
            <AuthScreen.Screen name="Splash" component={SplashScreen} />
        </AuthScreen.Navigator>
    )
}

export default AuthStack
