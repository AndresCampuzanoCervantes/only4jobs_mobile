import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { useEffect } from "react"
import { StatusBar, View } from "react-native"
import * as Animatable from "react-native-animatable"
import { useNavigate } from "./Hooks/useNavigate"
import { splashStyles } from "./styles/styles"

export default function SplashScreen(props) {
    const navigate = useNavigate()
    useEffect(() => {
        fetchSesion()
    }, [])

    return (
        <View style={splashStyles.image}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0.2)" />
            <Animatable.Image
                animation="pulse"
                easing="ease-out"
                iterationCount="infinite"
                style={{
                    width: 200,
                    height: 200,
                    margin: 100,
                }}
                source={require("./recursos/images/ONLY4Jobs-icon-white.png")}
            />
        </View>
    )

    async function fetchSesion() {
        const data = JSON.parse(await AsyncStorage.getItem("sesion"))
        if (data) {
            setTimeout(() => {
                navigate({ screen: "Home" })
            }, 3000)
            return
        } else {
            setTimeout(() => {
                navigate({ screen: "Login" })
            }, 3000)
        }
    }
}
