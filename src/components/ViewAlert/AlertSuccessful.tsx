import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity,
    Animated,
} from "react-native"
import React, { useState, useRef, useEffect } from "react"
import colors from "../../styles/colors"

import AnimatedLottieView from "lottie-react-native"

const AlertSuccessful = ({
    title,
    message,
    buttonColor,
    jsonPath,
    visible,
    children,
    props,
    icon,
    loop,
}: any) => {
    const [alertVisible, setAlertVisible] = useState(true)

    const [showModal, setShowModal] = useState(visible)

    const scaleValue = useRef(new Animated.Value(0)).current

    useEffect(() => {
        toggleModal()
    }, [visible])

    const toggleModal = () => {
        if (visible) {
            setShowModal(true)
            Animated.spring(scaleValue, {
                toValue: 1,
                useNativeDriver: true,
            }).start()
        } else {
            setShowModal(false)
        }
    }

    return (
        <View>
            <Modal animationType="slide" transparent={true} visible={showModal}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{title}</Text>
                        <View
                            style={{
                                width: "100%",
                                height: 0.5,
                                backgroundColor: colors.PURPLE,
                                marginVertical: 15,
                            }}
                        />

                        <View
                            style={{
                                width: "50%",
                                height: 100,
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                            <AnimatedLottieView
                                style={{ width: 150, height: 130 }}
                                autoPlay
                                loop={loop ?? false}
                                source={icon}
                            />
                        </View>
                        <Text style={styles.textStyle}>{message}</Text>
                        {children}
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default AlertSuccessful

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        alignContent: "center",
    },

    modalView: {
        width: "80%",
        margin: 10,
        backgroundColor: colors.WHITE,
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        shadowColor: colors.BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.85,
        elevation: 5,
        borderColor: colors.PINK,
        borderWidth: 10,
    },

    openButton: {
        backgroundColor: colors.PURPLE,
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        width: "50%",
        marginTop: 40,
    },

    textStyle: {
        color: colors.PURPLE,
        textAlign: "center",
        fontSize: 20,
        marginTop: 20,
        marginBottom: -15,
    },

    okStyle: {
        color: colors.WHITE,
        textAlign: "center",
        fontSize: 20,
    },

    modalText: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 34,
        color: colors.PURPLE,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})
