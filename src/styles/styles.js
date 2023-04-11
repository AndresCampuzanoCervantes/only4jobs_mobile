import { StyleSheet } from "react-native"
import color from "./colors"

//Estilos para SplashScreen
const splashStyles = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.WHITE,
    },
})

//Estilos para LoginScreen
const loginStyles = StyleSheet.create({
    containerPrincipal: {
        flex: 1,
        width: "90%",
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: color.BLUEMAIN,
    },

    container: {
        flex: 1,
        alignItems: "center",
    },

    logo: {
        alignItems: "center",
    },

    btnMain: {
        width: "95%",
        marginTop: 40,
        marginBottom: 20,
        backgroundColor: color.PURPLE,
        borderRadius: 60,
    },

    btnTransparent: {
        width: "95%",
        backgroundColor: "rgba(52, 52, 52, 0)",
        borderColor: color.PURPLE,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60,
    },

    btntxt: {
        textAlign: "center",
        fontSize: 17,
        color: color.WHITE,
        paddingVertical: 15,
        fontFamily: "Poppins-Bold",
    },

    txtTransparent: {
        textAlign: "center",
        color: color.PURPLE,
        fontSize: 14,
        fontFamily: "Poppins-Light",
    },
})

const mainStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "center",
        width: "90%",
        backgroundColor: color.WHITE,
    },

    containerCenter: {
        paddingTop: 10,
        alignItems: "center",
        marginBottom: 25,
    },

    titleText: {
        fontSize: 28,
        marginTop: 20,
        color: color.PURPLE,
        fontFamily: "Poppins-SemiBold",
        alignSelf: "center",
    },

    btnMain: {
        width: 280,
        marginTop: 40,
        marginBottom: 20,
        alignItems: "center",
        backgroundColor: color.PURPLE,
        borderRadius: 60,
    },

    btnTransparent: {
        backgroundColor: "rgba(52, 52, 52, 0)",
        borderColor: color.PURPLE,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60,
    },

    btntxt: {
        textAlign: "center",
        fontSize: 17,
        color: color.WHITE,
        paddingVertical: 15,
        fontFamily: "Poppins-Bold",
    },

    txtTransparent: {
        color: color.PURPLE,
        fontSize: 14,
        fontFamily: "Poppins-Light",
    },
})

//Estilos para RegistroScreen
const registroStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    checkBox: {
        marginLeft: 0,
        marginRight: 0,
        borderWidth: 0,
        backgroundColor: color.WHITE,
    },

    containerSocial: {
        paddingTop: 30,
        alignItems: "center",
        marginBottom: 10,
    },

    buttonSocialIcon: {
        marginBottom: 10,
        width: 250,
        height: 60,
        alignItems: "center",
        borderRadius: 60,
    },
})

export { loginStyles, mainStyles, registroStyles, splashStyles }
