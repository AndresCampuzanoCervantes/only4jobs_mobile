import React, { Suspense } from "react"
import { StatusBar } from "react-native"
import Router from "./Router"
import UserProvider from "../src/context/Usuario"

const App = () => {
    return (
        <>
            <Suspense fallback={<StatusBar animated />}>
                <UserProvider>
                    <Router />
                </UserProvider>
            </Suspense>
        </>
    )
}

export default App
