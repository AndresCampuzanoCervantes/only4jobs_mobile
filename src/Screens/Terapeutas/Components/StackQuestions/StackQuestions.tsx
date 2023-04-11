import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import SectionFour from "../SectionFour"
import SectionOne from "../SectionOne"
import SectionThree from "../SectionThree"
import SectionTwo from "../SectionTwo"

const Stack = createNativeStackNavigator()

const StackQuestions = () => {
    return (
        <Stack.Navigator
            initialRouteName="One"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="One" component={SectionOne} />
            <Stack.Screen name="Two" component={SectionTwo} />
            <Stack.Screen name="Three" component={SectionThree} />
            <Stack.Screen name="Four" component={SectionFour} />
        </Stack.Navigator>
    )
}

export default StackQuestions
