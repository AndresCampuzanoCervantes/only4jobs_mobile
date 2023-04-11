import React, { useEffect, useRef, useState } from "react"
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
import SelectListTerapia from "./Components/SelectListTerapia"
import ViewSearch from "../../components/Search"
import TableTerapia from "./Components/TableTerapia"
import ViewContainerModal from "../../components/Modal"
import InputsCrearTerapia from "./Components/InputsCrearTerapia"
import AlertSuccessful from "../../components/ViewAlert/AlertSuccessful"

const ConfigAjustes = () => {
    //datos de crear terapeutas
    const [data, setData] = useState<any[][]>([])

    //busqueda
    const [search, setSearch] = useState("")

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

    const showAlert = () => {
        if (alertVisible) {
            return (
                <AlertSuccessful
                    title="Agregado"
                    message="Se añadio Exitosamente"
                    visible={alertVisible}
                    icon={require("../../recursos/jsonAnime/successful.json")}>
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
                                        tipoTerapia: "",
                                        cantidadSesiones: "",
                                        precioTerapia: "$",
                                    }}
                                    onSubmit={values => {
                                        // console.log(data)
                                        if (
                                            selected !== "" &&
                                            values.cantidadSesiones !== "" &&
                                            values.precioTerapia !== ""
                                        ) {
                                            setData([
                                                ...data,
                                                [
                                                    selected,
                                                    values.cantidadSesiones,
                                                    values.precioTerapia,

                                                    <Text>
                                                        <TouchableOpacity
                                                            style={
                                                                styles.buttonEditar
                                                            }
                                                            onPress={() =>
                                                                console.log(
                                                                    "Editar"
                                                                )
                                                            }>
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
                                                            style={
                                                                styles.buttonEliminar
                                                            }
                                                            onPress={() =>
                                                                console.log(
                                                                    "Eliminar"
                                                                )
                                                            }>
                                                            <Image
                                                                source={require("../../recursos/images/trash-solid.png")}
                                                                style={{
                                                                    height: 25,
                                                                    width: 22,
                                                                }}
                                                            />
                                                        </TouchableOpacity>
                                                    </Text>,
                                                ],
                                            ])
                                            setVisible(false)
                                            setAlertVisible(true)
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
                                            {/* Tipo de Terapia */}
                                            <View style={{ marginBottom: 10 }}>
                                                <SelectListTerapia
                                                    setSelected={setSelected}
                                                />
                                            </View>
                                            <InputsCrearTerapia
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
                        <Text style={styles.btnModalText}>Crear Terapia</Text>
                    </TouchableOpacity>
                </View>

                {/* vista search */}
                <ViewSearch setSearch={setSearch} />

                {/* Vista Tabla */}
                <TableTerapia data={data} search={search} />
                {/* mostrar alerta en pantalla*/}
                {showAlert()}
            </SafeAreaView>
        </>
    )
}

export default ConfigAjustes

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

    //errores formik
    errorText: {
        fontSize: 14,
        color: colors.PINK2,
        marginBottom: 2,
        marginLeft: 20,
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
