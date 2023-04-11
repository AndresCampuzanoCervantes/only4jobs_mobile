import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import colors from "../../../styles/colors"
import { TextInput } from "react-native-paper"
import { Image } from "react-native-elements"

const InputsCrearLogin = (props: any) => {
    const [visibility, setVisibility] = useState(false)

    return (
        <View
            style={{
                width: "100%",
            }}>
            <View style={{ marginBottom: 10 }}>
                <TextInput
                    style={{ marginBottom: 10 }}
                    mode="outlined"
                    label="Correo"
                    outlineStyle={styles.textBoxes}
                    onBlur={props.handleBlur("email")}
                    onChangeText={props.handleChange("email")}
                    value={props.values.email}
                    keyboardType="default"
                />
                {props.errors.email && props.touched.email && (
                    <Text style={styles.errorText}>{props.errors.email}</Text>
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

export default InputsCrearLogin

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
