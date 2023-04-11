import React from "react"
import { StyleSheet, Text } from "react-native"
import { TextInput } from "react-native-paper"
import colors from "../../../styles/colors"

const InputsCrearProfile = (props: any) => {
    return (
        <>
            <TextInput
                disabled={props.disableInputs}
                style={{ marginBottom: 10 }}
                mode="outlined"
                label="Tag"
                outlineStyle={styles.textBoxes}
                onBlur={props.handleBlur("tagname")}
                onChangeText={props.handleChange("tagname")}
                value={props.values.tagname}
                keyboardType="default"
            />

            {props.errors.tagname &&
                props.touched.tagname &&
                !props.disableInputs && (
                    <Text style={styles.errorText}>{props.errors.tagname}</Text>
                )}

            <TextInput
                disabled={props.disableInputs}
                style={{ marginBottom: 10 }}
                mode="outlined"
                label="Nombre"
                outlineStyle={styles.textBoxes}
                onBlur={props.handleBlur("nombre")}
                onChangeText={props.handleChange("nombre")}
                value={props.values.nombre}
                keyboardType="default"
            />

            {props.errors.nombre &&
                props.touched.nombre &&
                !props.disableInputs && (
                    <Text style={styles.errorText}>{props.errors.nombre}</Text>
                )}

            <TextInput
                disabled={props.disableInputs}
                style={{ marginBottom: 10 }}
                mode="outlined"
                label="Apellido"
                outlineStyle={styles.textBoxes}
                onBlur={props.handleBlur("apellido")}
                onChangeText={props.handleChange("apellido")}
                value={props.values.apellido}
                keyboardType="default"
            />
            {props.errors.apellido &&
                props.touched.apellido &&
                !props.disableInputs && (
                    <Text style={styles.errorText}>
                        {props.errors.apellido}
                    </Text>
                )}

            <TextInput
                disabled={props.disableInputs}
                style={{ marginBottom: 10 }}
                mode="outlined"
                label="Correo"
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

            {/* <TextInput
                disabled={props.disableInputs}
                style={{ marginBottom: 10 }}
                mode="outlined"
                label="Telefono"
                outlineStyle={styles.textBoxes}
                onBlur={props.handleBlur("telefono")}
                onChangeText={props.handleChange("telefono")}
                value={props.values.telefono}
                keyboardType="number-pad"
            />
            {props.errors.telefono &&
                props.touched.telefono &&
                !props.disableInputs && (
                    <Text style={styles.errorText}>
                        {props.errors.telefono}
                    </Text>
                )}

            <TextInput
                disabled={props.disableInputs}
                style={{ marginBottom: 10 }}
                mode="outlined"
                label="Descripcion"
                outlineStyle={styles.textBoxes}
                onBlur={props.handleBlur("descripcion")}
                onChangeText={props.handleChange("descripcion")}
                value={props.values.descripcion}
                keyboardType="default"
            />
            {props.errors.descripcion &&
                props.touched.descripcion &&
                !props.disableInputs && (
                    <Text style={styles.errorText}>
                        {props.errors.descripcion}
                    </Text>
                )} */}

            {/* <TextInput
                disabled={props.disableInputs}
                style={{ marginBottom: 10 }}
                mode="outlined"
                label="Video"
                outlineStyle={styles.textBoxes}
                onBlur={props.handleBlur("video")}
                onChangeText={props.handleChange("video")}
                value={props.values.video}
                keyboardType="numeric"
            />
            {props.errors.video &&
                props.touched.video &&
                !props.disableInputs && (
                    <Text style={styles.errorText}>{props.errors.video}</Text>
                )}
 */}
            {/*   <VideoScreen /> */}
        </>
    )
}

export default InputsCrearProfile

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
