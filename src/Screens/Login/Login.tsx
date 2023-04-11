import React, { useContext, useState } from "react"
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native"
import { useNavigate } from "../../Hooks/useNavigate"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { UserContext } from "../../context/Usuario"
import colors from "../../styles/colors"
import { loginStyles } from "../../styles/styles"

// Importamos Formik y Yup
import axios from "axios"
import { Formik } from "formik"
import * as yup from "yup"
import InputsCrearLogin from "./Components/InputsCrearLogin"

const Login = (props: any) => {
    const [, setIsSession] = useState(false)
    const { setSession } = useContext(UserContext)
    const navigate = useNavigate()
    const [error, setError] = useState()

    const getStorage = async () => {
        if (await AsyncStorage.getItem("sesion")) {
            setIsSession(true)
        } else {
            setIsSession(false)
        }
    }

    const signIn = async (values: any) => {
        try {
            const data = await axios({
                method: "POST",
                url: "/login",
                data: {
                    email: values.email,
                    password: values.password,
                },
            })

            const sesion = {
                token: data.data.token,
                user: {
                    id: data?.data?.user?.id,
                    tag: data?.data?.tag,
                    name: data?.data?.name,
                    lastname: data?.data?.lastname,
                    email: data?.data?.email,
                    profileId: data?.data?.profileId,
                },
            }

            if (data.status === 200) {
                axios.interceptors.request.use(function (config: any) {
                    const setting = config
                    setting.headers.Authorization = data.data.token
                        ? data.data.token
                        : ""
                    return config
                })
                setSession(sesion)
                setIsSession(true)
            } else {
                setError(data.data.message)
                //setAlertVisible(true)
            }
        } catch (error) {
            console.error(error)
        }
    }

    // Mensajes de Validación del Formulario
    const isRequired = "*Campo Obligatorio"
    const loginValidationSchema = yup.object().shape({
        email: yup
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

    /*   // funcion mostrar alerta en pantalla
    const [alertVisible, setAlertVisible] = useState(false)

    const showAlert = () => {
        if (alertVisible) {
            return (
                <AlertSuccessful
                    title="Error"
                    message={error}
                    visible={alertVisible}
                    icon={require("../../recursos/jsonAnime/error.json")}
                    loop>
                    <TouchableOpacity
                        style={{
                            ...styles.openButton,
                            backgroundColor: colors.PURPLE,
                        }}
                        onPress={() => {
                            setAlertVisible(!alertVisible)
                        }}>
                        <Text style={styles.okStyle}>Ok</Text>
                    </TouchableOpacity>
                </AlertSuccessful>
            )
        }
    }
 */
    return (
        <ScrollView contentContainerStyle={loginStyles.containerPrincipal}>
            <StatusBar backgroundColor={colors.BLACK} translucent={true} />
            <View style={loginStyles.logo}>
                <Image
                    source={require("../../recursos/images/ONLY4Jobs-icon-white.png")}
                    style={{ height: 250, width: 250 }}
                />
            </View>

            {/* formulario Login */}
            <View>
                <Formik
                    validateOnMount={true}
                    validationSchema={loginValidationSchema}
                    initialValues={{
                        email: "",
                        password: "",
                    }}
                    onSubmit={values => {
                        signIn(values)
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
                                <InputsCrearLogin
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    handleSubmit={handleSubmit}
                                    values={values}
                                    errors={errors}
                                    handleReset={handleReset}
                                    touched={touched}
                                    isValid={isValid}
                                />
                            </View>

                            {/* botones */}
                            <View
                                style={{
                                    marginTop: -20,
                                    alignItems: "center",
                                }}>
                                {/* boton iniciar sesion */}
                                <View style={loginStyles.btnMain}>
                                    <TouchableOpacity onPress={handleSubmit}>
                                        <Text style={loginStyles.btntxt}>
                                            Iniciar Sesión
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                {/* boton registrarse */}
                                <View style={loginStyles.btnTransparent}>
                                    <TouchableOpacity
                                        onPress={() =>
                                            navigate({ screen: "Register" })
                                        }>
                                        <Text
                                            style={[
                                                loginStyles.btntxt,
                                                { color: colors.PURPLE },
                                            ]}>
                                            Registrarse
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                {/* boton olvide contraseña */}
                                <View>
                                    <TouchableOpacity>
                                        <Text
                                            style={[
                                                loginStyles.txtTransparent,
                                                { textDecorationLine: "none" },
                                            ]}>
                                            Olvide mi contraseña
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                </Formik>
            </View>

            {/* mostrar alerta en pantalla*/}
            {/*  {showAlert()} */}
        </ScrollView>
    )
}
export default Login

const styles = StyleSheet.create({
    // estilos boton alerta
    okStyle: {
        color: colors.WHITE,
        textAlign: "center",
        fontSize: 20,
    },
    openButton: {
        backgroundColor: colors.PURPLE,
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        width: "50%",
        marginTop: 40,
    },
})
