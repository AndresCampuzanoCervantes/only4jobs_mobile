import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { TextInput } from "react-native-paper"
import colors from "../../../styles/colors"

const InputsCrearRegistro = (props: any) => {
    const [visibility, setVisibility] = useState(false)
    // datos de especialidad terapeuta
    const [selected, setSelected] = useState("")
    return (
        <View
            style={{
                width: "100%",
            }}>
            <View style={{ marginBottom: 10 }}>
                <TextInput
                    style={{ marginBottom: 10 }}
                    mode="outlined"
                    label="Tag"
                    outlineStyle={styles.textBoxes}
                    onBlur={props.handleBlur("tag")}
                    onChangeText={props.handleChange("tag")}
                    value={props.values.tag}
                    keyboardType="default"
                />
                {props.errors.tag && props.touched.tag && (
                    <Text style={styles.errorText}>{props.errors.tag}</Text>
                )}

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
                    <Text style={styles.errorText}>
                        {props.errors.apellido}
                    </Text>
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
                    label="Contraseña"
                    outlineStyle={styles.textBoxes}
                    onBlur={props.handleBlur("password")}
                    onChangeText={props.handleChange("password")}
                    value={props.values.password}
                    keyboardType="default"
                    secureTextEntry={!visibility}
                    right={
                        <TextInput.Icon
                            icon={
                                visibility
                                    ? require("../../../recursos/images/ic_hide_password.png")
                                    : require("../../../recursos/images/ic_show_password.png")
                            }
                            iconColor={colors.PURPLE}
                            size={40}
                            onPress={() => {
                                setVisibility(!visibility)
                            }}
                        />
                    }
                />
                {props.errors.password && props.touched.password && (
                    <Text style={styles.errorText}>
                        {props.errors.password}
                    </Text>
                )}
            </View>
        </View>
    )
}

export default InputsCrearRegistro

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
