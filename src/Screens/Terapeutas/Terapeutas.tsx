import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import ModalProvider from "../../context/ModalContext"
import colors from "../../styles/colors"
import StackQuestions from "./Components/StackQuestions"
import TerapeutasScreen from "./Components/TerapeutasScreen"

const Terapeutas = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [data, setData] = useState({})

    const setQuestion = async () => {
        try {
            const question = await AsyncStorage.getItem("question")
            if (question) {
                setOpen(!JSON.parse(question))
            } else {
                await AsyncStorage.setItem("question", "true")
                setOpen(true)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const onClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        let mounted = true

        if (mounted) {
            setQuestion()
        }
        return () => {
            mounted = false
        }
    }, [])

    return (
        <ModalProvider
            data={data}
            setData={data => setData(data)}
            onClose={onClose}>
            <View style={styles.container}>
                <View style={[styles.modal, open ? {} : styles.close]}>
                    <View style={styles.modalContainer}>
                        <StackQuestions />
                    </View>
                </View>
                <TerapeutasScreen />
            </View>
        </ModalProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    //MODAL
    modal: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        backgroundColor: colors.WHITE,
        padding: 10,
        width: "90%",
        height: "70%",
        borderRadius: 20,
    },
    close: {
        display: "none",
    },
})

export default Terapeutas
