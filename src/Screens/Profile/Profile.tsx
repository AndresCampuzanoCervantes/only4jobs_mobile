import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { useContext, useState } from "react"
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native"
import { UserContext } from "../../context/Usuario"
import colors from "../../styles/colors"
import InputsCrearProfile from "./Components/InputsCrearProfile"

// Importamos Formik y Yup
import { Formik } from "formik"
import * as yup from "yup"
import AlertSuccessful from "../../components/ViewAlert/AlertSuccessful"
import ImageScreen from "./Components/ImageScreen"

const Profile = () => {
    const { user, setSession } = useContext(UserContext)
    const [isSession, setIsSession] = useState(false)
    const [disableInputs, setDisableInputs] = useState(true)
    const getStorage = async () => {
        const data = await AsyncStorage.getItem("sesion")
        console.log(data)
        if (data) {
            setIsSession(true)
        } else {
            setIsSession(false)
        }
    }
    const closeSesion = async () => {
        setSession(null)
        await AsyncStorage.removeItem("sesion")
        getStorage()
    }

    // Mensajes de Validación del Formulario
    const isRequired = "*Campo Obligatorio"
    const loginValidationSchema = yup.object().shape({
        tagname: yup.string().required(isRequired),
        nombre: yup.string().required(isRequired),
        apellido: yup.string().required(isRequired),
        /* documentoI: yup.number().required(isRequired), */
        correo: yup
            .string()
            .required(isRequired)
            .email("Ingrese un correo válido"),
    })

    //datos de crear profile
    const [data, setData] = useState<any[]>([])

    const toggleDisable = () => {
        setDisableInputs(state => !state)
    }

    // funcion mostrar alerta en pantalla
    const [alertVisible, setAlertVisible] = useState(false)

    const showAlert = () => {
        if (alertVisible) {
            return (
                <AlertSuccessful
                    title="Editado"
                    message="Se Cambio Exitosamente"
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
                <ScrollView
                    contentContainerStyle={{ alignItems: "center" }}
                    showsVerticalScrollIndicator={false}>
                    <View>
                        {/*  <Image
                            source={
                                user?.user?.image
                                    ? { uri: user.user.image }
                                    : require("../../recursos/images/user.png")
                            }
                            style={styles.image}
                            resizeMode="center"
                        /> */}
                    </View>
                    {/* imagen profile */}
                    <ImageScreen />

                    {/* formulario profile */}

                    <Formik
                        validateOnMount={true}
                        validationSchema={loginValidationSchema}
                        initialValues={{
                            tagname: user.tag ?? "",
                            nombre: user.user.name ?? "",
                            apellido: user.user.lastname ?? "",
                            correo: user.user.email ?? "",
                        }}
                        onSubmit={async values => {
                            if (
                                values.tagname !== "" &&
                                values.nombre !== "" &&
                                values.apellido !== "" &&
                                values.correo !== ""
                            ) {
                                if (disableInputs == false) {
                                    /* let URL = ""
                                    switch(user.user.rol){
                                        case "terapeuta":
                                            URL="/admin/editt/"
                                            break
                                        case "admin":
                                            URL="/admin/editt/"
                                            break
                                        case "paciente":
                                            URL="/admin/editp/"
                                            break
                                    }

                                    const data = axios({
                                        method:"PUT",
                                        url:URL+user.user.id,
                                        data:{
                                            telefono:
                                            cedula:
                                            especialidad:
                                            descripcion:
                                            video:
                                        }
                                    }) */

                                    setSession({
                                        ...user,
                                        user: {
                                            ...user.user,
                                            tag: values.tagname,
                                            name: values.nombre,
                                            lastname: values.apellido,
                                            email: values.correo,
                                        },
                                    })
                                    setAlertVisible(true)
                                    console.log(setSession)
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
                                <InputsCrearProfile
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

                                {/* botones */}
                                <View>
                                    {/* boton cambiar */}
                                    <View style={styles.btnMain}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                disableInputs
                                                    ? toggleDisable()
                                                    : handleSubmit()
                                            }>
                                            <Text style={styles.btntxt}>
                                                {disableInputs == true
                                                    ? "Cambiar"
                                                    : "Guardar"}
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    {/* boton cerrar sesion */}
                                    <View style={styles.btnTransparent}>
                                        <TouchableOpacity onPress={closeSesion}>
                                            <Text
                                                style={[
                                                    styles.btntxt,
                                                    {
                                                        color: colors.PURPLE,
                                                    },
                                                ]}>
                                                Cerrar Sesion
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )}
                    </Formik>
                </ScrollView>
                {/* mostrar alerta en pantalla*/}
                {showAlert()}
            </SafeAreaView>
        </>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    text: {
        fontFamily: "HelveticaNeue",
        color: "#52575D",
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16,
    },
    subText: {
        fontSize: 12,
        color: "#AEB5BC",
        textTransform: "uppercase",
        fontWeight: "500",
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
    },
    dm: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: 20,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10,
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16,
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32,
    },
    statsBox: {
        alignItems: "center",
        flex: 1,
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10,
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1,
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10,
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16,
    },
    activityIndicator: {
        backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20,
    },
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
