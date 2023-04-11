import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native"
import DatePicker from "react-native-date-picker"
import React, { useState } from "react"
import colors from "../../styles/colors"

const DatePickerComponent = (props: any) => {
    const [open, setOpen] = useState(false)
    return (
        <View>
            <TouchableOpacity
                onPress={() => setOpen(true)}
                style={[styles.calendar]}>
                <Text
                    style={{
                        color: colors.PINK2,
                        fontSize: 16,
                    }}>
                    {props.date.toLocaleDateString("es", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                    })}
                </Text>
                <Image
                    source={require("../../recursos/images/calendar-days-solid.png")}
                    style={{
                        height: 25,
                        width: 22,
                        marginLeft: 8,
                    }}
                />
            </TouchableOpacity>
            <DatePicker
                confirmText="Confirmar"
                cancelText="Cancelar"
                title="Seleccione una fecha"
                modal
                open={open}
                date={props.date}
                onConfirm={date => {
                    setOpen(false)
                    props.onChange(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
                mode="datetime"
                locale="es"
                textColor={colors.PURPLE}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    calendar: {
        borderColor: colors.PURPLE,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 8,
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
})

export default DatePickerComponent
