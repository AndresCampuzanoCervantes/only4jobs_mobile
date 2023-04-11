import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { useState } from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const [date, setDate] = useState<string>()
    const [_isSession, setIsSession] = useState(false)
    const getStorage = async () => {
        const data = await AsyncStorage.getItem("sesion")
        console.log(data)
        if (data) {
            setIsSession(true)
        } else {
            setIsSession(false)
        }
    }
    return (
        <ScrollView>
            <Image
                source={require("../../recursos/images/logo.png")}
                style={{
                    marginTop: 40,
                    height: 80,
                    width: "80%",
                    justifyContent: "center",
                    alignSelf: "center",
                }}
            />

            <View>
                <Text>Ultimas ofertas de trabajo</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})

export default Home
