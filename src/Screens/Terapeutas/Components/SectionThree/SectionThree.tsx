import { useFormik } from "formik"
import React, { useContext } from "react"
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Button, RadioButton } from "react-native-paper"
import { useNavigate } from "../../../../Hooks/useNavigate"
import { ModalContext } from "../../../../context/ModalContext"
import { mainStyles } from "../../../../styles/styles"
import colors from "../../../../styles/colors"
const SectionThree = () => {
    const navigate = useNavigate()
    const { setData, data } = useContext(ModalContext)
    const formik = useFormik({
        initialValues: {
            avance: "",
            proceso: "",
            terapeuta: "",
            buscas: "",
        },
        onSubmit: values => {
            if (validateFormNotEmpty(values)) {
                setData({ ...data, ...values })
                navigate({ screen: "Four" })
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
                            onValueChange={formik.handleChange("avance")}
                            value={formik.values.avance}>
                            <Text style={mainStyles.titleText}>
                                ¿Cómo esperas que sea el avance de tu proceso?
                            </Text>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Conciso"></RadioButton>
                                <Text style={styles.answer}>
                                    Conciso, enfocado y con objetivos
                                    alcanzables a corto plazo
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Prisa"></RadioButton>
                                <Text style={styles.answer}>
                                    No tengo prisa, busco estar en constante
                                    crecimiento poniendo a prueba lo que vaya
                                    aprendiendo
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="IDK2"></RadioButton>
                                <Text style={styles.answer}>
                                    No lo sé aún, habría que descubrirlo
                                </Text>
                            </View>
                        </RadioButton.Group>

                        <Text style={mainStyles.titleText}>
                            ¿Qué buscas en el proceso de sanación?
                        </Text>
                        <RadioButton.Group
                            onValueChange={formik.handleChange("proceso")}
                            value={formik.values.proceso}>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Escuchado"></RadioButton>
                                <Text style={styles.answer}>
                                    Sentirse escuchado y aprender nuevas
                                    herramientas a poner a prueba
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="EjerIn"></RadioButton>
                                <Text style={styles.answer}>
                                    Ejercicios prácticos durante la sesión
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="EjerOut"></RadioButton>
                                <Text style={styles.answer}>
                                    Ejercicios prácticos para fuera de la sesión
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Both"></RadioButton>
                                <Text style={styles.answer}>
                                    Ejercicios prácticos dentro y fuera de la
                                    sesión
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="IDK3"></RadioButton>
                                <Text style={styles.answer}>
                                    No lo se por el momento
                                </Text>
                            </View>
                        </RadioButton.Group>
                        <Text style={mainStyles.titleText}>
                            ¿Qué buscas en un terapeuta?
                        </Text>
                        <RadioButton.Group
                            onValueChange={formik.handleChange("terapeuta")}
                            value={formik.values.terapeuta}>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Direct"></RadioButton>
                                <Text style={styles.answer}>
                                    Que sea directo y a través de una
                                    conversación asertiva
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Expand"></RadioButton>
                                <Text style={styles.answer}>
                                    Que expanda mi mente profundizando en mis
                                    emociones y pensamientos
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Both2"></RadioButton>
                                <Text style={styles.answer}>
                                    Estoy abierto a ambas opciones
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="IDK4"></RadioButton>
                                <Text style={styles.answer}>
                                    No lo se por el momento
                                </Text>
                            </View>
                        </RadioButton.Group>
                        <Text style={mainStyles.titleText}>
                            ¿Qué enfoque buscas de la terapia?
                        </Text>
                        <RadioButton.Group
                            onValueChange={formik.handleChange("buscas")}
                            value={formik.values.buscas}>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Emocions"></RadioButton>
                                <Text style={styles.answer}>
                                    Ayuda para manejar mis emociones
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Goals"></RadioButton>
                                <Text style={styles.answer}>
                                    Ayuda para proponerme metas y cumplirlas
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Relationship"></RadioButton>
                                <Text style={styles.answer}>
                                    Mejorar mis relaciones
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Sexuality"></RadioButton>
                                <Text style={styles.answer}>
                                    Hablar sobre mi sexualidad
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Reprimir"></RadioButton>
                                <Text style={styles.answer}>
                                    Reprimir mis conductas autodestructivas
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Autoestima"></RadioButton>
                                <Text style={styles.answer}>
                                    Mejorar mi autoestima
                                </Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Alimentacion"></RadioButton>
                                <Text style={styles.answer}>
                                    Mejorar mi alimentación y sentirme bien con
                                    mi cuerpo
                                </Text>
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
                                    onPress={() => navigate({ screen: "Two" })}>
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

export default SectionThree

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
