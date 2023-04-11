import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import colors from "../styles/colors"
import TabStack from "./TabStack"

const GeneralScreen = createNativeStackNavigator()

const GeneralStack = () => {
    return (
        <GeneralScreen.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: colors.PURPLE },
                headerTintColor: colors.WHITE,
            }}>
            <GeneralScreen.Screen
                name="Tabs"
                component={TabStack}
                options={{ headerShown: false }}
            />
        </GeneralScreen.Navigator>
    )
}

export default GeneralStack
