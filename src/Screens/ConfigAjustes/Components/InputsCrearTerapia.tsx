import { StyleSheet, Text, View } from "react-native"
import React from "react"
import colors from "../../../styles/colors"
import { TextInput } from "react-native-paper"

const InputsCrearTerapia = (props: any) => {
    return (
        <View style={{ marginBottom: 10 }}>
            <TextInput
                style={{ marginBottom: 10 }}
                mode="outlined"
                label="Cantidad De Sesiones"
                outlineStyle={styles.textBoxes}
                onBlur={props.handleBlur("cantidadSesiones")}
                onChangeText={props.handleChange("cantidadSesiones")}
                value={props.values.cantidadSesiones}
                keyboardType="numeric"
            />
            {props.errors.cantidadSesiones &&
                props.touched.cantidadSesiones && (
                    <Text style={styles.errorText}>
                        {props.errors.cantidadSesiones}
                    </Text>
                )}
            <TextInput
                style={{ marginBottom: 10 }}
                mode="outlined"
                label="Precio De Terapia En Dolares"
                outlineStyle={styles.textBoxes}
                onBlur={props.handleBlur("precioTerapia")}
                onChangeText={props.handleChange("precioTerapia")}
                value={props.values.precioTerapia}
                keyboardType="numeric"
            />
            {props.errors.precioTerapia && props.touched.precioTerapia && (
                <Text style={styles.errorText}>
                    {props.errors.precioTerapia}
                </Text>
            )}
        </View>
    )
}

export default InputsCrearTerapia

const styles = StyleSheet.create({
    //cajas de texto
    textBoxes: {
        borderColor: colors.PURPLE,
        borderWidth: 2,
        fontWeight: "bold",
    },

    //errores formik
    errorText: {
        fontSize: 14,
        color: colors.PINK2,
        marginBottom: 5,
        marginLeft: 20,
    },
})
