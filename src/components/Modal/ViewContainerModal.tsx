import { Animated, Modal, StyleSheet, View } from "react-native"
import React, { useEffect, useRef, useState } from "react"
import colors from "../../styles/colors"

const ViewContainerModal = ({ visible, children }: any) => {
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
        <Modal transparent visible={showModal}>
            <View style={[styles.modalBackGround]}>
                <Animated.View
                    style={[
                        styles.modalContainer,
                        { transform: [{ scale: scaleValue }] },
                    ]}>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    )
}

export default ViewContainerModal

const styles = StyleSheet.create({
    modalBackGround: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },

    modalContainer: {
        width: "90%",
        backgroundColor: colors.WHITE,
        padding: 15,
        borderRadius: 20,
        elevation: 10,

        justifyContent: "flex-start",
    },
})
