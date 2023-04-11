import { StyleSheet, Text, View } from "react-native"
import React from "react"
import colors from "../../../styles/colors"
import { TextInput } from "react-native-paper"

const InputsCrearTerapias = (props: any) => {
    return (
        <>
            <View style={{ flexDirection: "row", width: "100%" }}>
                <TextInput
                    disabled={props.disableInputs}
                    mode="outlined"
                    outlineStyle={styles.textBoxes}
                    onBlur={props.handleBlur("nombres")}
                    onChangeText={props.handleChange("nombres")}
                    value={props.values.nombres}
                    keyboardType="default"
                    style={{ flex: 1 }}
                />

                {props.errors.nombres &&
                    props.touched.nombres &&
                    !props.disableInputs && (
                        <Text style={styles.errorText}>
                            {props.errors.nombres}
                        </Text>
                    )}
                <TextInput
                    disabled={props.disableInputs}
                    mode="outlined"
                    outlineStyle={styles.textBoxes}
                    onBlur={props.handleBlur("apellidos")}
                    onChangeText={props.handleChange("apellidos")}
                    value={props.values.apellidos}
                    keyboardType="default"
                    style={{ flex: 1 }}
                />

                {props.errors.apellidos &&
                    props.touched.apellidos &&
                    !props.disableInputs && (
                        <Text style={styles.errorText}>
                            {props.errors.apellidos}
                        </Text>
                    )}
            </View>

            <TextInput
                disabled={props.disableInputs}
                mode="outlined"
                outlineStyle={styles.textBoxes}
                onBlur={props.handleBlur("correo")}
                onChangeText={props.handleChange("correo")}
                value={props.values.correo}
                keyboardType="email-address"
            />
            {props.errors.correo &&
                props.touched.correo &&
                !props.disableInputs && (
                    <Text style={styles.errorText}>{props.errors.correo}</Text>
                )}
        </>
    )
}

export default InputsCrearTerapias

const styles = StyleSheet.create({
    //cajas de texto
    textBoxes: {
        borderColor: colors.PURPLE,
        borderWidth: 2,
        fontWeight: "bold",
        width: "100%",
    },

    //errores formik
    errorText: {
        fontSize: 14,
        color: colors.PINK2,
        marginBottom: 5,
        marginLeft: 20,
    },
})
