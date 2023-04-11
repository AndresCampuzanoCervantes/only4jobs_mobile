import { useFormik } from "formik"
import React, { useContext } from "react"
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Button, RadioButton } from "react-native-paper"
import { useNavigate } from "../../../../Hooks/useNavigate"
import { ModalContext } from "../../../../context/ModalContext"
import { mainStyles } from "../../../../styles/styles"
import colors from "../../../../styles/colors"

const SectionTwo = () => {
    const navigate = useNavigate()
    const { setData, data } = useContext(ModalContext)
    const formik = useFormik({
        initialValues: {
            sesion: "",
            modelo: "",
            sentir: "",
            sanacion: "",
        },
        onSubmit: values => {
            if (validateFormNotEmpty(values)) {
                setData({ ...data, ...values })
                navigate({ screen: "Three" })
            }
        },
    })

    const validateFormNotEmpty = (form: object): boolean => {
        const arrForm = Object.values(form)
        return arrForm.every(value => value !== "")
    }

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <RadioButton.Group
                            onValueChange={formik.handleChange("sesion")}
                            value={formik.values.sesion}>
                            <Text style={mainStyles.titleText}>
                                ¿Qué tipo de sesión buscas?
                            </Text>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Individual"></RadioButton>
                                <Text style={styles.answer}>
                                    Individual, busco enfocarme en mí
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="DePareja"></RadioButton>
                                <Text style={styles.answer}>
                                    De pareja, perfecto para 2 personas
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Grupal"></RadioButton>
                                <Text style={styles.answer}>
                                    Grupal, más de 2 personas
                                </Text>
                            </View>
                        </RadioButton.Group>

                        <Text style={mainStyles.titleText}>
                            ¿Qué modelo terapéutico estás buscando?
                        </Text>
                        <RadioButton.Group
                            onValueChange={formik.handleChange("modelo")}
                            value={formik.values.modelo}>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Psico"></RadioButton>
                                <Text style={styles.answer}>Psicoanálisis</Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Cognitivo"></RadioButton>
                                <Text style={styles.answer}>
                                    Cognitivo Conductual
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Integrativo"></RadioButton>
                                <Text style={styles.answer}>Integrativo</Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Sistemico"></RadioButton>
                                <Text style={styles.answer}>Sistémico</Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Humanista"></RadioButton>
                                <Text style={styles.answer}>Humanista</Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Otro"></RadioButton>
                                <Text style={styles.answer}>Otro</Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="IDK"></RadioButton>
                                <Text style={styles.answer}>Aún no sé</Text>
                            </View>
                        </RadioButton.Group>

                        <Text style={mainStyles.titleText}>
                            ¿Con quién te sentirás más cómodo compartiendo tu
                            situación?
                        </Text>
                        <RadioButton.Group
                            onValueChange={formik.handleChange("sentir")}
                            value={formik.values.sentir}>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="F"></RadioButton>
                                <Text style={styles.answer}>Una Mujer</Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="M"></RadioButton>
                                <Text style={styles.answer}>Un Hombre</Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Whatever"></RadioButton>
                                <Text style={styles.answer}>
                                    Me es indiferente
                                </Text>
                            </View>
                        </RadioButton.Group>

                        <Text style={mainStyles.titleText}>
                            ¿Cuánto buscas que dure tu proceso de sanación?
                        </Text>
                        <RadioButton.Group
                            onValueChange={formik.handleChange("sanacion")}
                            value={formik.values.sanacion}>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="1-2M"></RadioButton>
                                <Text style={styles.answer}>1-2 Meses</Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="3-12M"></RadioButton>
                                <Text style={styles.answer}>3-12 Meses</Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="1-2A"></RadioButton>
                                <Text style={styles.answer}>1-2 años</Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Indefinido"></RadioButton>
                                <Text style={styles.answer}>Indefinido</Text>
                            </View>
                        </RadioButton.Group>

                        <View
                            style={{
                                height: 95,
                                width: "90%",
                                justifyContent: "space-between",
                                alignSelf: "center",
                            }}>
                            <Button
                                style={{ backgroundColor: colors.PURPLE }}
                                mode="contained"
                                onPress={formik.handleSubmit}>
                                Siguiente
                            </Button>
                            <View style={styles.btnTransparent}>
                                <Button
                                    style={{ backgroundColor: colors.WHITE }}
                                    mode="contained"
                                    onPress={() => navigate({ screen: "One" })}>
                                    <Text style={{ color: colors.PURPLE }}>
                                        Anterior
                                    </Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}

export default SectionTwo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    question: {
        flexDirection: "row",
        alignItems: "center",
    },
    answer: {
        width: "90%",
    },
    btnTransparent: {
        alignSelf: "center",
        backgroundColor: "rgba(52, 52, 52, 0)",
        borderColor: colors.PURPLE,
        width: "100%",
        borderWidth: 2,
        marginTop: 1,
        borderRadius: 60,
    },
})
