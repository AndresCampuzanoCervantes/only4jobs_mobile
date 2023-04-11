import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React, { useContext } from "react"
import { Image } from "react-native"
import ConfigAjustes from "../Screens/ConfigAjustes/ConfigAjustes"
import Home from "../Screens/Home"
import Profile from "../Screens/Profile"
import Trabajos from "../Screens/Trabajos/Trabajos"
import { UserContext } from "../context/Usuario"
import colors from "../styles/colors"

const Tab = createBottomTabNavigator()

export default function TabStack() {
    const { user } = useContext(UserContext)

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 15 },
                tabBarActiveTintColor: colors.PURPLE,
                headerStyle: { backgroundColor: colors.PURPLE },
                headerTintColor: colors.WHITE,
                tabBarItemStyle: { marginTop: 5 },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: props => (
                        <Image
                            source={require("../recursos/images/house-24.png")}
                            style={{ height: 28, width: 28 }}
                        />
                    ),
                }}
            />

            {user.profileId === 1 ? (
                //ADMIN
                <Tab.Group>
                    <Tab.Screen
                        name="Admin"
                        component={ConfigAjustes}
                        options={{
                            tabBarIcon: props => (
                                <Image
                                    source={require("../recursos/images/gear-solid.png")}
                                    style={{ height: 24, width: 24 }}
                                />
                            ),
                        }}
                    />
                </Tab.Group>
            ) : (
                //USER
                <Tab.Group>
                    <Tab.Screen
                        name="Trabajos"
                        component={Trabajos}
                        options={{
                            tabBarIcon: props => (
                                <Image
                                    source={require("../recursos/images/patient-icon.png")}
                                    style={{ height: 28, width: 28 }}
                                />
                            ),
                        }}
                    />
                </Tab.Group>
            )}
            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    tabBarIcon: props => (
                        <Image
                            source={require("../recursos/images/profile2.png")}
                            style={{ height: 28, width: 28 }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
