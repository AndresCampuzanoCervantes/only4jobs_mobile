import { StyleSheet } from "react-native"
import colors from "../../styles/colors"

export const useStylesCheckbox = () => {
    const styles = StyleSheet.create({
        checkContainer: {
            width: 30,
            height: 30,
            borderWidth: 2,
            borderRadius: 100,
            backgroundColor: "transparent",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        innerCheck: {
            width: "80%",
            height: "80%",
            borderRadius: 100,
        },
    })

    const variants = StyleSheet.create({
        primary: {
            backgroundColor: colors.PURPLE,
            borderColor: colors.PURPLE,
        },
        secondary: {
            backgroundColor: "#2C405A",
            borderColor: "#2C405A",
        },
        white: {
            backgroundColor: "white",
            borderColor: "white",
        },
        transparent: {
            backgroundColor: "transparent",
            borderColor: "#cccccc",
        },
        noShow: {
            display: "none",
            borderColor: "transparent",
        },
    })

    return {
        variants,
        styles,
    }
}
