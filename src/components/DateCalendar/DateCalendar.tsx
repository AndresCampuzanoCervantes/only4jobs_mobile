import React, { useState } from "react"
import {
    Modal,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
    View,
} from "react-native"
import { Calendar, DateData } from "react-native-calendars"
import colors from "../../styles/colors"

interface IDateCalendarProps {
    date: Date
    setDate: (date: Date) => void
    buttonStyles?: TouchableOpacityProps["style"]
}

const DateCalendar = ({ date, setDate, buttonStyles }: IDateCalendarProps) => {
    const [open, setOpen] = useState(false)
    const onClose = () => {
        setOpen(false)
    }
    const onOpen = () => {
        setOpen(true)
    }

    const onSelectADate = (date: DateData) => {
        setDate(new Date(date.dateString))
        onClose()
    }

    return (
        <>
            {/* BOTON */}
            <TouchableOpacity
                style={[styles.buttonContainer, buttonStyles]}
                onPress={onOpen}>
                <Text style={styles.buttonText}>
                    {date.toLocaleDateString("es", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                    })}
                </Text>
            </TouchableOpacity>
            {/* MODAL CALENDARIO */}
            <Modal
                animationType="slide"
                transparent
                visible={open}
                onRequestClose={onClose}>
                <SafeAreaView style={styles.modal}>
                    <View style={styles.modalContainer}>
                        <Calendar
                            theme={{
                                selectedDayBackgroundColor: colors.BLACK,
                                arrowColor: colors.WHITE,
                                monthTextColor: colors.WHITE,
                            }}
                            style={{
                                backgroundColor: colors.PURPLE,
                                borderRadius: 10,
                                elevation: 4,
                                marginTop: 10,
                                margin: 10,
                                height: 320,
                            }}
                            onDayPress={onSelectADate}
                            minDate={new Date()
                                .toLocaleDateString("es-US", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "numeric",
                                    formatMatcher: "basic",
                                })
                                .split("/")
                                .reverse()
                                .join("-")}
                            markedDates={{
                                day: {
                                    marked: true,
                                    dotColor: colors.WHITE,
                                    selected: true,
                                    selectedColor: colors.PURPLE,
                                },
                            }}
                        />
                    </View>
                </SafeAreaView>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    //BUTTON
    buttonContainer: {
        width: "100%",
        backgroundColor: colors.WHITE,
        borderColor: colors.PURPLE,
        borderWidth: 2,
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        color: colors.PURPLE,
    },
    //MODAL
    modal: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        width: "90%",
        height: "50%",
        backgroundColor: colors.WHITE,
        borderRadius: 20,
        justifyContent: "center",
        elevation: 5,
    },
})

export default DateCalendar
