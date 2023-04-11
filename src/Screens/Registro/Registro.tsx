import React, { useState } from "react"
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native"
import { Button } from "react-native-elements"
import ToolBar from "../../components/ToolBar"
import color from "../../styles/colors"
import { mainStyles } from "../../styles/styles"
import InputsCrearRegistro from "./Components/InputsCrearRegistro"

// Importamos Formik y Yup
import axios from "axios"
import { Formik } from "formik"
import * as yup from "yup"
import { useNavigate } from "../../Hooks/useNavigate"
import Checkbox from "../../components/Checkbox/Checkbox"
import AlertSuccessful from "../../components/ViewAlert/AlertSuccessful"
import colors from "../../styles/colors"

const Registro = (props: any) => {
    // Mensajes de Validación del Formulario
    const isRequired = "*Campo Obligatorio"
    const loginValidationSchema = yup.object().shape({
        tag: yup.string().required(isRequired),
        nombre: yup.string().required(isRequired),
        apellido: yup.string().required(isRequired),
        correo: yup
            .string()
            .required(isRequired)
            .email("Ingrese un correo válido"),
        password: yup
            .string()
            .min(
                8,
                ({ min }) =>
                    `La contraseña debe tener al menos ${min} caracteres`
            )
            .required(isRequired)
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Debe contener 8 caracteres, uno en mayúscula, uno en minúscula, un número y un carácter de caso especial"
            ),
    })

    const navigate = useNavigate()
    const [check, setCheck] = useState(false)
    // datos de tipo de cuenta
    const [selected, setSelected] = useState("")

    // funcion mostrar alerta en pantalla
    const [alertVisibleError, setAlertVisibleError] = useState(false)
    const [error, setError] = useState({
        message: "",
        title: "",
    })
    const showAlertError = () => {
        if (alertVisibleError) {
            return (
                <AlertSuccessful
                    title={error.title}
                    message={error.message}
                    visible={alertVisibleError}
                    icon={require("../../recursos/jsonAnime/error.json")}>
                    <TouchableOpacity
                        style={{
                            ...styles.openButton,
                            backgroundColor: colors.PURPLE,
                        }}
                        onPress={() => {
                            setAlertVisibleError(!alertVisibleError)
                        }}>
                        <Text style={styles.okStyle}>Ok</Text>
                    </TouchableOpacity>
                </AlertSuccessful>
            )
        }
    }

    // funcion mostrar alerta en pantalla
    const [alertVisibleSuccess, setAlertVisibleSuccess] = useState(false)
    const [success, setSuccess] = useState({
        message: "",
        title: "",
    })
    const showAlertSucces = () => {
        if (alertVisibleSuccess) {
            return (
                <AlertSuccessful
                    title={success.title}
                    message={success.message}
                    visible={alertVisibleSuccess}
                    icon={require("../../recursos/jsonAnime/successful.json")}>
                    <TouchableOpacity
                        style={{
                            ...styles.openButton,
                            backgroundColor: colors.PURPLE,
                        }}
                        onPress={() => {
                            setAlertVisibleSuccess(!alertVisibleSuccess)
                        }}>
                        <Text style={styles.okStyle}>Ok</Text>
                    </TouchableOpacity>
                </AlertSuccessful>
            )
        }
    }

    return (
        <ScrollView
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps="always"
            style={{ backgroundColor: color.WHITE }}>
            <StatusBar backgroundColor={color.PURPLE} translucent={true} />
            <ToolBar
                titulo="Registrarse"
                onPressLeft={() =>
                    navigate({
                        screen: "Login",
                    })
                }
                iconLeft={require("../../recursos/images/back.png")}
            />
            <View style={[mainStyles.container, { paddingTop: 50 }]}>
                {/* Tipo de cuenta */}

                <Text style={mainStyles.titleText}> Crea tu Cuenta</Text>

                {/* formulario Registro */}
                <View>
                    <Formik
                        validateOnMount={true}
                        validationSchema={loginValidationSchema}
                        initialValues={{
                            tag: "",
                            nombre: "",
                            apellido: "",
                            correo: "",
                            password: "",
                        }}
                        onSubmit={async values => {
                            try {
                                const data = await axios({
                                    method: "POST",
                                    url: "/register",
                                    data: {
                                        tag: values.tag,
                                        name: values.nombre,
                                        lastname: values.apellido,
                                        email: values.correo,
                                        password: values.password,
                                    },
                                })
                                if (data.status === 201) {
                                    setAlertVisibleSuccess(true)
                                    setSuccess({
                                        message: data.data.message,
                                        title: "Registrado",
                                    })
                                    navigate({
                                        screen: "Login",
                                    })
                                } else {
                                    console.log(data.data.response)
                                    setError({
                                        message: data.data.message,
                                        title: "Error",
                                    })
                                    setAlertVisibleError(true)
                                }
                            } catch (error) {
                                console.error(error)
                            }
                        }}>
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            handleReset,
                            touched,
                            isValid,
                        }) => (
                            <View>
                                {/* inputs */}
                                <View style={{ marginTop: 15 }}>
                                    <InputsCrearRegistro
                                        handleChange={handleChange}
                                        handleBlur={handleBlur}
                                        handleSubmit={handleSubmit}
                                        values={values}
                                        errors={errors}
                                        handleReset={handleReset}
                                        touched={touched}
                                        isValid={isValid}
                                        option={selected}
                                    />
                                </View>

                                <Checkbox
                                    containerStyle={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        alignSelf: "center",
                                        width: "90%",
                                        justifyContent: "space-between",
                                    }}
                                    value={check}
                                    toggleValue={() => setCheck(!check)}>
                                    <Text>
                                        He leído y acepto los términos y
                                        condiciones
                                    </Text>
                                </Checkbox>

                                {/* botones */}
                                <View
                                    style={{
                                        marginTop: -20,
                                        alignItems: "center",
                                    }}>
                                    {/* boton registrarse */}
                                    <View style={mainStyles.btnMain}>
                                        <TouchableOpacity
                                            disabled={!check}
                                            onPress={handleSubmit}>
                                            <Text style={mainStyles.btntxt}>
                                                Registrarse
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                {/* ya tienes cuenta */}
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        alignSelf: "center",
                                        marginTop: -20,
                                    }}>
                                    <Text style={{ color: color.PURPLE }}>
                                        ¿Ya tienes una cuenta?
                                    </Text>
                                    <Button
                                        title="Inicia Sesión"
                                        titleStyle={{ color: color.PURPLE }}
                                        onPress={() =>
                                            navigate({
                                                screen: "Login",
                                            })
                                        }
                                        type="clear"
                                    />
                                </View>
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
            {/*  mostrar alerta en pantalla */}
            {showAlertError()}
            {showAlertSucces()}
        </ScrollView>
    )
}
export default Registro
const styles = StyleSheet.create({
    // estilos boton alerta
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
    },

    okStyle: {
        color: colors.WHITE,
        textAlign: "center",
        fontSize: 20,
    },
})
