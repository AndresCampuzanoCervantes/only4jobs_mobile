import React, { useContext, useState } from "react"
import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import { UserContext } from "../../../context/Usuario"
import colors from "../../../styles/colors"

const ImageScreen = () => {
    const { user, setSession } = useContext(UserContext)
    const [image, setImage] = useState(
        user?.user?.image ? user.user.image : "https://via.placeholder.com/200"
    )

    const selectImage = () => {
        const options: any = {
            title: "Seleccione un video",
            mediaType: "image",
            storageOptions: {
                skipBackup: true,
                path: "images",
            },
        }
        launchImageLibrary(options, response => {
            if (response.errorCode) {
                console.log(response.errorMessage)
            } else if (response.didCancel) {
                console.log("El usuario cancelo la operacion")
            } else {
                const path = response.assets[0].uri
                setImage(path)
            }
        })
    }
    const takePicture = () => {
        const options: any = {
            title: "Grabar un video",
            mediaType: "image",
            storageOptions: {
                skipBackup: true,
                path: "images",
            },
            includeBase64: true,
        }
        launchCamera(options, response => {
            if (response.errorCode) {
                console.log(response.errorMessage)
            } else if (response.didCancel) {
                console.log("El usuario cancelo la fotografia")
            } else {
                const uri = response.assets[0].uri
                setImage(uri)
            }
        })
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", marginTop: 10 }}>
            <Image style={styles.profileImage} source={{ uri: image }} />

            {/*  botones de seleccionar imagen */}
            <View
                style={{
                    flexDirection: "row",
                    alignSelf: "center",
                    marginLeft: 4,
                    marginRight: 4,
                }}>
                {/* boton Seleccione una imagen */}
                <View style={styles.btnSelectImg}>
                    <TouchableOpacity onPress={selectImage}>
                        <Image
                            source={require("../../../recursos/images/file-image.png")}
                            style={{ height: 25, width: 20 }}
                        />
                    </TouchableOpacity>
                </View>
                {/* boton tomar una foto */}
                <View style={styles.btnTakeImg}>
                    <TouchableOpacity onPress={takePicture}>
                        {/* <Text style={styles.btntxt}> Tomar Foto</Text> */}
                        <Image
                            source={require("../../../recursos/images/camera.png")}
                            style={{ height: 25, width: 28 }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
export default ImageScreen
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
        width: 150,
        height: 150,
        borderRadius: 100,
        overflow: "hidden",
        alignSelf: "center",
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

    //botones img
    btnSelectImg: {
        marginTop: 10,
        marginBottom: 10,
        alignSelf: "center",
        marginLeft: 8,
        marginRight: 8,
    },
    btnTakeImg: {
        marginTop: 10,
        marginBottom: 10,
        alignSelf: "center",
        marginLeft: 8,
        marginRight: 8,
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
