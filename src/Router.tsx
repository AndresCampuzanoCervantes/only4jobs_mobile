import { NavigationContainer } from "@react-navigation/native"
import React, { useContext } from "react"
import { UserContext } from "./context/Usuario"
import AuthStack from "./routes/AuthStack"
import GeneralStack from "./routes/GeneralStack"

const Router = () => {
    const { user } = useContext(UserContext)

    return (
        <NavigationContainer>
            {user != null ? <GeneralStack /> : <AuthStack />}
        </NavigationContainer>
    )
}

export default Router
