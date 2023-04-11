import { StyleSheet, Text, View } from "react-native"
import React from "react"
import colors from "../../../styles/colors"
import { TextInput } from "react-native-paper"

const InputsCrearPaciente = (props: any) => {
    return (
        <View style={{ marginBottom: 10 }}>
            <TextInput
                style={{ marginBottom: 10 }}
                mode="outlined"
                label="Nombre"
                outlineStyle={styles.textBoxes}
                onBlur={props.handleBlur("nombre")}
                onChangeText={props.handleChange("nombre")}
                value={props.values.nombre}
                keyboardType="default"
            />
            {props.errors.nombre && props.touched.nombre && (
                <Text style={styles.errorText}>{props.errors.nombre}</Text>
            )}
            <TextInput
                style={{ marginBottom: 10 }}
                mode="outlined"
                label="Apellido"
                outlineStyle={styles.textBoxes}
                onBlur={props.handleBlur("apellido")}
                onChangeText={props.handleChange("apellido")}
                value={props.values.apellido}
                keyboardType="default"
            />
            {props.errors.apellido && props.touched.apellido && (
                <Text style={styles.errorText}>{props.errors.apellido}</Text>
            )}
            <TextInput
                style={{ marginBottom: 10 }}
                mode="outlined"
                label="Correo"
                outlineStyle={styles.textBoxes}
                onBlur={props.handleBlur("correo")}
                onChangeText={props.handleChange("correo")}
                value={props.values.correo}
                keyboardType="email-address"
            />
            {props.errors.correo && props.touched.correo && (
                <Text style={styles.errorText}>{props.errors.correo}</Text>
            )}

            <TextInput
                style={{ marginBottom: 10 }}
                mode="outlined"
                label="Telefono"
                outlineStyle={styles.textBoxes}
                onBlur={props.handleBlur("telefono")}
                onChangeText={props.handleChange("telefono")}
                value={props.values.telefono}
                keyboardType="number-pad"
            />
            {props.errors.telefono && props.touched.telefono && (
                <Text style={styles.errorText}>{props.errors.telefono}</Text>
            )}
            <TextInput
                style={{ marginBottom: 10 }}
                mode="outlined"
                label="Password"
                outlineStyle={styles.textBoxes}
                onBlur={props.handleBlur("password")}
                onChangeText={props.handleChange("password")}
                value={props.values.password}
                keyboardType="default"
            />
            {props.errors.password && props.touched.password && (
                <Text style={styles.errorText}>{props.errors.password}</Text>
            )}
        </View>
    )
}

export default InputsCrearPaciente

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
