import React, { useState, useEffect, useMemo } from "react"
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    LogBox,
} from "react-native"

// Importamos Formik y Yup
import { Formik } from "formik"
import * as yup from "yup"

import colors from "../../styles/colors"

//componentes de ConfigTerapeutas
import ViewSearch from "../../components/Search"
import TablePaciente from "./Components/TablePaciente"
import ViewContainerModal from "../../components/Modal"
import InputsCrearPaciente from "./Components/InputsCrearPaciente"
import AlertSuccessful from "../../components/ViewAlert/AlertSuccessful"
import axios from "axios"

const ConfigPacientes = () => {
    LogBox.ignoreLogs(["Invalid prop textStyle of type array supplied to Cell"])
    //datos de crear terapeutas
    const [data, setData] = useState<any[]>([])

    //busqueda
    const [search, setSearch] = useState("")

    //Modal
    const [visible, setVisible] = useState(false)

    // datos de especialidad terapeuta
    const [selected, setSelected] = useState("")

    // Mensajes de Validación del Formulario
    const isRequired = "*Campo Obligatorio"
    const loginValidationSchema = yup.object().shape({
        nombre: yup.string().required(isRequired),
        apellido: yup.string().required(isRequired),
        correo: yup
            .string()
            .required(isRequired)
            .email("Ingrese un correo válido"),
        telefono: yup.number().required(isRequired),
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
                    icon={require("../../recursos/jsonAnime/successful.json")}>
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

    const getData = async () => {
        try {
            console.log("hola")

            const data = await axios({
                method: "GET",
                url: "/admin/seep",
            })
            console.log(data.data)
            if (data.data.response === "Success") {
                setData(data.data.datainfo)
            } else {
                console.log(data.data.response)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const createPaciente = async (values: any) => {
        try {
            const data = await axios({
                method: "POST",
                url: "/admin/createp",
                data: {
                    nombre: values.nombre,
                    apellido: values.apellido,
                    email: values.correo,
                    telefono: values.telefono,
                    password: values.password,
                },
            })
            if (data.data.response === "Success") {
                setAlertVisibleSuccess(true)
                setSuccess({ message: data.data.message, title: "Agregado" })
            } else {
                console.log(data.data.response)
                setAlertVisibleError(true)
                setError({ message: data.data.message, title: "Error" })
            }
        } catch (error) {
            console.error(error)
        }
    }

    const eliminarPaciente = async (id: string) => {
        try {
            const data = await axios({
                method: "DELETE",
                url: "/admin/remove/" + id,
            })
            console.log(data.data)
            if (data.data.response === "Success") {
                setData(state => state.filter((item: any) => item._id !== id))
            } else {
                console.log(data.data.response)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const actualizarStatus = async (id: string) => {
        try {
            const data = await axios({
                method: "PUT",
                url: "/admin/status/" + id,
            })
            console.log(data.data)

            if (data.data.response === "Success") {
                setData(state =>
                    state.map((item: any) => {
                        if (item._id === id) {
                            return { ...item, isActive: !item.isActive }
                        }
                        return item
                    })
                )
                setAlertVisibleSuccess(true)
                setSuccess({ message: data.data.message, title: "Cambiado" })
            } else {
                console.log(data.data.response)
                setError(data.data.message)
                setAlertVisibleError(true)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const datainfo = useMemo(
        () =>
            data.map((item: any) => [
                item.nombre,
                item.apellido,
                item.email,
                item.telefono,
                item.password,
                <TouchableOpacity
                    onPress={() => actualizarStatus(item._id)}
                    style={[
                        {
                            width: "70%",
                            backgroundColor: colors.PURPLE,
                            height: "70%",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 20,
                            alignSelf: "center",
                        },
                        item.isActive
                            ? { backgroundColor: "green" }
                            : { backgroundColor: "red" },
                    ]}>
                    <Text
                        style={{
                            color: colors.WHITE,
                            fontSize: 16,
                            fontWeight: "bold",
                        }}>
                        on/off
                    </Text>
                </TouchableOpacity>,

                <Text>
                    <TouchableOpacity
                        style={styles.buttonEditar}
                        onPress={() => console.log(item._id)}>
                        <Image
                            source={require("../../recursos/images/pen-to-square-solid.png")}
                            style={{
                                height: 25,
                                width: 25,
                            }}
                        />
                    </TouchableOpacity>
                    ,
                    <TouchableOpacity
                        style={styles.buttonEliminar}
                        onPress={() => eliminarPaciente(item._id)}>
                        <Image
                            source={require("../../recursos/images/trash-solid.png")}
                            style={{
                                height: 25,
                                width: 22,
                            }}
                        />
                    </TouchableOpacity>
                </Text>,
            ]),
        [data]
    )

    useEffect(() => {
        let mounted = true

        if (mounted) {
            getData()
        }

        return () => {
            mounted = false
        }
    }, [])

    return (
        <>
            <SafeAreaView style={styles.container}>
                <View>
                    <ViewContainerModal visible={visible}>
                        <View style={{ alignItems: "center" }}>
                            <View style={styles.header}>
                                <TouchableOpacity
                                    onPress={() => setVisible(false)}>
                                    <Image
                                        source={require("../../recursos/images/x.png")}
                                        style={{ height: 10, width: 30 }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.modalMainContainer}>
                            {/* Aca va el crear terapeuta */}
                            <View>
                                {/* formulario de Terapeutas */}
                                <Formik
                                    validateOnMount={true}
                                    validationSchema={loginValidationSchema}
                                    initialValues={{
                                        nombre: "",
                                        apellido: "",
                                        correo: "",
                                        telefono: "",
                                        password: "",
                                    }}
                                    onSubmit={values => {
                                        // console.log(data)
                                        if (
                                            values.nombre !== "" &&
                                            values.apellido !== "" &&
                                            values.correo !== "" &&
                                            values.telefono !== "" &&
                                            values.password !== ""
                                        ) {
                                            setData([
                                                ...data,
                                                {
                                                    nombre: values.nombre,
                                                    apellido: values.apellido,
                                                    email: values.correo,
                                                    telefono: values.telefono,
                                                    password: values.password,
                                                },
                                            ])
                                            createPaciente(values)
                                            setVisible(false)
                                            setAlertVisibleSuccess(true)
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
                                            <InputsCrearPaciente
                                                handleChange={handleChange}
                                                handleBlur={handleBlur}
                                                handleSubmit={handleSubmit}
                                                values={values}
                                                errors={errors}
                                                handleReset={handleReset}
                                                touched={touched}
                                                isValid={isValid}
                                            />

                                            {/* botones del modal */}
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    alignSelf: "center",
                                                    marginLeft: 4,
                                                    marginRight: 4,
                                                }}>
                                                {/* boton limpiar */}
                                                <View
                                                    style={
                                                        styles.btnMainLimpiar
                                                    }>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            handleReset()
                                                        }}>
                                                        <Text
                                                            style={[
                                                                styles.btntxt,
                                                                {
                                                                    color: colors.PURPLE,
                                                                },
                                                            ]}>
                                                            Limpiar
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                {/* boton crear */}
                                                <View
                                                    style={styles.btnMainCrear}>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                            handleSubmit()
                                                        }}>
                                                        <Text
                                                            style={
                                                                styles.btntxt
                                                            }>
                                                            Crear
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    )}
                                </Formik>
                            </View>
                        </View>
                    </ViewContainerModal>

                    <TouchableOpacity
                        onPress={() => setVisible(true)}
                        style={styles.btnStyle}>
                        <Text style={styles.btnModalText}>Crear Nuevo</Text>
                    </TouchableOpacity>
                </View>

                {/* vista search */}
                <ViewSearch setSearch={setSearch} />

                {/* Vista Tabla */}
                <TablePaciente data={datainfo} search={search} />
                {/* mostrar alerta en pantalla*/}
                {showAlertError()}
                {showAlertSucces()}
            </SafeAreaView>
        </>
    )
}

export default ConfigPacientes

const styles = StyleSheet.create({
    //contenedor principal
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    //botones dentro del modal
    btnMainCrear: {
        width: 150,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: colors.PURPLE,
        borderRadius: 60,
        alignSelf: "flex-start",
        marginLeft: 4,
        marginRight: 4,
        borderColor: colors.PURPLE,
        borderWidth: 3,
    },

    btnMainLimpiar: {
        width: 150,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 60,
        alignSelf: "flex-end",
        marginLeft: 4,
        marginRight: 4,
        backgroundColor: "rgba(52, 52, 52, 0)",
        borderColor: colors.PURPLE,
        borderWidth: 3,
    },

    btntxt: {
        textAlign: "center",
        fontSize: 18,
        color: colors.WHITE,
        paddingVertical: 15,
        fontFamily: "Poppins-Bold",
        fontWeight: "bold",
    },

    //cajas de texto
    textBoxes: {
        width: "100%",
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
        padding: 12,
        borderColor: "purple",
        borderWidth: 2,
        borderRadius: 10,
        alignSelf: "center",
        margin: 12,
    },

    //modal
    modalMainContainer: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,
    },

    header: {
        width: "100%",
        height: 40,
        justifyContent: "center",
        marginTop: -21,
        marginLeft: "190%",
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

    buttonEliminar: {
        borderRadius: 50,
        height: 45,
        width: 45,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonEditar: {
        borderRadius: 50,
        height: 45,
        width: 45,
        justifyContent: "center",
        alignItems: "center",
    },
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
