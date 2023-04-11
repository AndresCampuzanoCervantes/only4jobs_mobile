import React, { useContext, useEffect, useRef, useState } from "react"
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native"

// Importamos Formik y Yup
import { Formik } from "formik"
import * as yup from "yup"
import colors from "../../styles/colors"

//componentes de ConfigTerapeutas
import { useNavigate } from "../../Hooks/useNavigate"
import InputsCrearProfile from "../Profile/Components/InputsCrearProfile"
import { UserContext } from "../../context/Usuario"
import InputsCrearTerapias from "./Components/InputsCrearTerapias"

const ConfigAjustes = () => {
    //datos de crear terapeutas
    const [data, setData] = useState<any[][]>([])

    //Modal
    const [visible, setVisible] = useState(false)

    // datos de especialidad terapeuta
    const [selected, setSelected] = useState("")

    // Mensajes de Validación del Formulario
    const isRequired = "*Campo Obligatorio"
    const loginValidationSchema = yup.object().shape({
        cantidadSesiones: yup.string().required(isRequired),
        precioTerapia: yup.string().required(isRequired),
    })

    // funcion mostrar alerta en pantalla
    const [alertVisible, setAlertVisible] = useState(false)

    const toggleDisable = () => {
        setDisableInputs(state => !state)
    }
    const navigate = useNavigate()
    const [isSession, setIsSession] = useState(false)
    const [disableInputs, setDisableInputs] = useState(true)
    const { user, setSession } = useContext(UserContext)
    return (
        <>
            <Formik
                validateOnMount={true}
                validationSchema={loginValidationSchema}
                initialValues={{
                    nombres: user.user.nombre ?? "",
                    apellidos: user.user.apellido ?? "",
                    correo: user.user.email ?? "",
                }}
                onSubmit={async values => {
                    if (
                        values.nombres !== "" &&
                        values.apellidos !== "" &&
                        values.correo !== ""
                    ) {
                        if (disableInputs == false) {
                            setSession({
                                ...user,
                                user: {
                                    ...user.user,
                                    nombre: values.nombres,
                                    apellido: values.apellidos,
                                    correo: values.correo,
                                },
                            })
                            setAlertVisible(true)
                        }
                        setDisableInputs(state => !state)
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
                    <View
                        style={{
                            flex: 1,
                            width: "90%",
                            alignSelf: "center",
                        }}>
                        <InputsCrearTerapias
                            disableInputs={disableInputs}
                            user={user.user}
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
                )}
            </Formik>
            <SafeAreaView style={styles.container}>
                <View>
                    <TouchableOpacity
                        onPress={() =>
                            navigate({
                                screen: "Terapeutas",
                            })
                        }
                        style={styles.btnStyle}>
                        <Text style={styles.btnModalText}>+ NUEVA TERAPIA</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default ConfigAjustes

const styles = StyleSheet.create({
    //contenedor principal
    container: {
        flex: 5,
        backgroundColor: "#FFF",
    },
    //botones dentro del modal
    btnMain: {
        width: 320,
        marginTop: 1,
        marginBottom: 10,
        backgroundColor: colors.PURPLE,
        borderRadius: 60,
        alignSelf: "center",
    },
    btnTransparent: {
        alignSelf: "center",
        backgroundColor: "rgba(52, 52, 52, 0)",
        borderColor: colors.PURPLE,
        width: 320,
        borderWidth: 2,
        marginTop: 1,
        marginBottom: 10,
        borderRadius: 60,
    },
    btnMainLimpiar: {
        width: 150,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: colors.PURPLE,
        borderRadius: 60,
        alignSelf: "flex-end",
        marginLeft: 4,
        marginRight: 4,
    },

    btntxt: {
        textAlign: "center",
        fontSize: 18,
        color: colors.WHITE,
        paddingVertical: 15,
        fontFamily: "Poppins-Bold",
    },

    //botones para crear nuevo terapeuta
    btnStyle: {
        marginBottom: 20,
        marginTop: 10,
        width: "90%",
        borderRadius: 50,
        backgroundColor: colors.PURPLE,
        alignSelf: "center",
    },
    btnModalText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: colors.WHITE,
        marginVertical: 8,
    },
})
