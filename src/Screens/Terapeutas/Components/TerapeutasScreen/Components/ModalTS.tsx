import React, { useEffect, useRef, useState } from "react"
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native"
import colors from "../../../../../styles/colors"

// Importamos Formik y Yup
import { Formik } from "formik"
import * as yup from "yup"

//componentes de ConfigTerapeutas
import ViewContainerModal from "../../../../../components/Modal/ViewContainerModal"
import SelectListTS from "./SelectListTS"

const ModalTS = (props: any) => {
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
                                        source={require("../../../../../recursos/images/x.png")}
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
                                        precioTerapia: "",
                                    }}
                                    onSubmit={values => {
                                        console.log(data)
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
                                                ],
                                            ])
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
                                            <View style={{ marginBottom: 15 }}>
                                                <SelectListTS
                                                    setSelected={setSelected}
                                                />
                                            </View>
                                            {/* botones del modal */}
                                            <View
                                                style={{
                                                    flexDirection: "row",
                                                    alignSelf: "center",
                                                    marginLeft: 4,
                                                    marginRight: 4,
                                                    marginTop: -10,
                                                }}>
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
                                                            Aplicar
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
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
                                                            style={
                                                                styles.btntxt
                                                            }>
                                                            Limpiar
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
                        style={styles.btnMain}>
                        <Image
                            source={require("../../../../../recursos/images/Filtro_White.png")}
                            style={{ height: 28, width: 28, marginRight: 10 }}
                        />
                        <Text style={styles.btntxt}>Filtro</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    )
}

export default ModalTS

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
    },
    btnMain: {
        width: "80%",
        marginTop: 2,
        marginBottom: 10,
        backgroundColor: colors.PURPLE,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
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
})
