import { useFormik } from "formik"
import React, { useContext } from "react"
import { StyleSheet, Text, View } from "react-native"
import { Button, RadioButton } from "react-native-paper"
import { useNavigate } from "../../../../Hooks/useNavigate"
import { ModalContext } from "../../../../context/ModalContext"
import { mainStyles } from "../../../../styles/styles"
import colors from "../../../../styles/colors"
import { SafeAreaView } from "react-native-safe-area-context"
const SectionOne = () => {
    const navigate = useNavigate()
    const { setData, data } = useContext(ModalContext)
    const formik = useFormik({
        initialValues: { age: "" },
        onSubmit: values => {
            if (values.age !== "") {
                setData({ ...data, ...values })
                navigate({ screen: "Two" })
            }
        },
    })
    return (
        <SafeAreaView style={styles.container}>
            <Text style={mainStyles.titleText}>¿Nos regalarías tu edad?</Text>
            <RadioButton.Group
                onValueChange={formik.handleChange("age")}
                value={formik.values.age}>
                <View style={styles.question}>
                    <RadioButton
                        color={colors.PURPLE}
                        value="8-12"></RadioButton>
                    <Text style={styles.answer}>8 - 12</Text>
                </View>
                <View style={styles.question}>
                    <RadioButton
                        color={colors.PURPLE}
                        value="13-17"></RadioButton>
                    <Text style={styles.answer}>13 - 17</Text>
                </View>
                <View style={styles.question}>
                    <RadioButton
                        color={colors.PURPLE}
                        value="18-25"></RadioButton>
                    <Text style={styles.answer}>18 - 25</Text>
                </View>
                <View style={styles.question}>
                    <RadioButton
                        color={colors.PURPLE}
                        value="26-35"></RadioButton>
                    <Text style={styles.answer}>26 - 35</Text>
                </View>
                <View style={styles.question}>
                    <RadioButton
                        color={colors.PURPLE}
                        value="36-50"></RadioButton>
                    <Text style={styles.answer}>36 - 50</Text>
                </View>
                <View style={styles.question}>
                    <RadioButton
                        color={colors.PURPLE}
                        value="51-64"></RadioButton>
                    <Text style={styles.answer}>51 - 64</Text>
                </View>
                <View style={styles.question}>
                    <RadioButton color={colors.PURPLE} value="65-EA" />
                    <Text style={styles.answer}>65 - En adelante</Text>
                </View>
            </RadioButton.Group>
            <Button
                style={{ backgroundColor: colors.PURPLE }}
                mode="contained"
                onPress={formik.handleSubmit}>
                <Text style={styles.btntxt}>Siguiente</Text>
            </Button>
        </SafeAreaView>
    )
}

export default SectionOne

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        justifyContent: "space-around",
    },
    question: {
        flexDirection: "row",
        alignItems: "center",
    },
    answer: {
        width: "90%",
    },
    btntxt: {
        textAlign: "center",
        fontSize: 17,
        color: colors.WHITE,
        paddingVertical: 15,
        fontFamily: "Poppins-Bold",
    },
})
