import { useFormik } from "formik"
import React, { useContext, useState } from "react"
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Button, RadioButton } from "react-native-paper"
import { useNavigate } from "../../../../Hooks/useNavigate"
import Checkbox from "../../../../components/Checkbox"
import { ModalContext } from "../../../../context/ModalContext"
import { mainStyles } from "../../../../styles/styles"
import colors from "../../../../styles/colors"

const SectionFour = () => {
    const navigate = useNavigate()
    const { onClose, data, setData } = useContext(ModalContext)
    const formik = useFormik({
        initialValues: { type: "" },
        onSubmit: values => {
            console.log("SE HA COMPLETADO EXITOSAMENTE EL MATCH")
            setData({ ...data, ...values })
            onClose()
        },
    })
    const [reading, setReading] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ])

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <RadioButton.Group
                            onValueChange={formik.handleChange("type")}
                            value={formik.values.type}>
                            <Text style={mainStyles.titleText}>
                                ¿Estarías abierto a la posibilidad de terapia
                                nutricional?
                            </Text>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Ofcourse"></RadioButton>
                                <Text style={styles.answer}>Por supuesto</Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="IDTS"></RadioButton>
                                <Text style={styles.answer}>No lo creo</Text>
                            </View>
                            <View style={styles.question}>
                                <RadioButton
                                    color={colors.PURPLE}
                                    value="Maybe"></RadioButton>
                                <Text style={styles.answer}>
                                    Aún no lo se, posiblemente en un futuro
                                </Text>
                            </View>
                        </RadioButton.Group>

                        <Text style={mainStyles.titleText}>
                            Marca 3 motivos por los cuales buscas acudir a
                            terapia
                        </Text>

                        <View>
                            <View style={styles.question}>
                                <Checkbox
                                    disabled={
                                        reading.filter(item => item).length >=
                                            3 && !reading[0]
                                    }
                                    containerStyle={styles.question}
                                    style={{
                                        marginHorizontal: 8,
                                        width: 21,
                                        height: 21,
                                    }}
                                    variant="primary"
                                    toggleValue={() =>
                                        setReading(
                                            reading.map((item, index) =>
                                                index === 0 ? !item : item
                                            )
                                        )
                                    }
                                    value={reading[0]}>
                                    <Text style={styles.answer}>
                                        Mejorar mis relaciones
                                    </Text>
                                </Checkbox>
                            </View>
                            <View style={styles.question}>
                                <Checkbox
                                    disabled={
                                        reading.filter(item => item).length >=
                                            3 && !reading[1]
                                    }
                                    containerStyle={styles.question}
                                    style={{
                                        marginHorizontal: 8,
                                        width: 21,
                                        height: 21,
                                    }}
                                    variant="primary"
                                    toggleValue={() =>
                                        setReading(
                                            reading.map((item, index) =>
                                                index === 1 ? !item : item
                                            )
                                        )
                                    }
                                    value={reading[1]}>
                                    <Text style={styles.answer}>
                                        Aumentar mi autoestima
                                    </Text>
                                </Checkbox>
                            </View>
                            <View style={styles.question}>
                                <Checkbox
                                    disabled={
                                        reading.filter(item => item).length >=
                                            3 && !reading[2]
                                    }
                                    containerStyle={styles.question}
                                    style={{
                                        marginHorizontal: 8,
                                        width: 21,
                                        height: 21,
                                    }}
                                    variant="primary"
                                    toggleValue={() =>
                                        setReading(
                                            reading.map((item, index) =>
                                                index === 2 ? !item : item
                                            )
                                        )
                                    }
                                    value={reading[2]}>
                                    <Text style={styles.answer}>
                                        Corregir conductas
                                    </Text>
                                </Checkbox>
                            </View>
                            <View style={styles.question}>
                                <Checkbox
                                    disabled={
                                        reading.filter(item => item).length >=
                                            3 && !reading[3]
                                    }
                                    containerStyle={styles.question}
                                    style={{
                                        marginHorizontal: 8,
                                        width: 21,
                                        height: 21,
                                    }}
                                    variant="primary"
                                    toggleValue={() =>
                                        setReading(
                                            reading.map((item, index) =>
                                                index === 3 ? !item : item
                                            )
                                        )
                                    }
                                    value={reading[3]}>
                                    <Text style={styles.answer}>
                                        Alcanzar metas personales y/o
                                        profesionales
                                    </Text>
                                </Checkbox>
                            </View>
                            <View style={styles.question}>
                                <Checkbox
                                    disabled={
                                        reading.filter(item => item).length >=
                                            3 && !reading[4]
                                    }
                                    containerStyle={styles.question}
                                    style={{
                                        marginHorizontal: 8,
                                        width: 21,
                                        height: 21,
                                    }}
                                    variant="primary"
                                    toggleValue={() =>
                                        setReading(
                                            reading.map((item, index) =>
                                                index === 4 ? !item : item
                                            )
                                        )
                                    }
                                    value={reading[4]}>
                                    <Text style={styles.answer}>
                                        Trastornos alimenticios
                                    </Text>
                                </Checkbox>
                            </View>
                            <View style={styles.question}>
                                <Checkbox
                                    disabled={
                                        reading.filter(item => item).length >=
                                            3 && !reading[5]
                                    }
                                    containerStyle={styles.question}
                                    style={{
                                        marginHorizontal: 8,
                                        width: 21,
                                        height: 21,
                                    }}
                                    variant="primary"
                                    toggleValue={() =>
                                        setReading(
                                            reading.map((item, index) =>
                                                index === 5 ? !item : item
                                            )
                                        )
                                    }
                                    value={reading[5]}>
                                    <Text style={styles.answer}>
                                        Alcanzar la introspección emocional
                                    </Text>
                                </Checkbox>
                            </View>
                            <View style={styles.question}>
                                <Checkbox
                                    disabled={
                                        reading.filter(item => item).length >=
                                            3 && !reading[6]
                                    }
                                    containerStyle={styles.question}
                                    style={{
                                        marginHorizontal: 8,
                                        width: 21,
                                        height: 21,
                                    }}
                                    variant="primary"
                                    toggleValue={() =>
                                        setReading(
                                            reading.map((item, index) =>
                                                index === 6 ? !item : item
                                            )
                                        )
                                    }
                                    value={reading[6]}>
                                    <Text style={styles.answer}>
                                        Aumentar mi inteligencia emocional
                                    </Text>
                                </Checkbox>
                            </View>
                            <View style={styles.question}>
                                <Checkbox
                                    disabled={
                                        reading.filter(item => item).length >=
                                            3 && !reading[7]
                                    }
                                    containerStyle={styles.question}
                                    style={{
                                        marginHorizontal: 8,
                                        width: 21,
                                        height: 21,
                                    }}
                                    variant="primary"
                                    toggleValue={() =>
                                        setReading(
                                            reading.map((item, index) =>
                                                index === 7 ? !item : item
                                            )
                                        )
                                    }
                                    value={reading[7]}>
                                    <Text style={styles.answer}>
                                        Manejar mis emociones correctamente
                                    </Text>
                                </Checkbox>
                            </View>
                            <View style={styles.question}>
                                <Checkbox
                                    disabled={
                                        reading.filter(item => item).length >=
                                            3 && !reading[8]
                                    }
                                    containerStyle={styles.question}
                                    style={{
                                        marginHorizontal: 8,
                                        width: 21,
                                        height: 21,
                                    }}
                                    variant="primary"
                                    toggleValue={() =>
                                        setReading(
                                            reading.map((item, index) =>
                                                index === 8 ? !item : item
                                            )
                                        )
                                    }
                                    value={reading[8]}>
                                    <Text style={styles.answer}>
                                        Tratar mi depresión
                                    </Text>
                                </Checkbox>
                            </View>
                            <View style={styles.question}>
                                <Checkbox
                                    disabled={
                                        reading.filter(item => item).length >=
                                            3 && !reading[9]
                                    }
                                    containerStyle={styles.question}
                                    style={{
                                        marginHorizontal: 8,
                                        width: 21,
                                        height: 21,
                                    }}
                                    variant="primary"
                                    toggleValue={() =>
                                        setReading(
                                            reading.map((item, index) =>
                                                index === 9 ? !item : item
                                            )
                                        )
                                    }
                                    value={reading[9]}>
                                    <Text style={styles.answer}>
                                        Alcanzar un diagnóstico de mi salud
                                        mental
                                    </Text>
                                </Checkbox>
                            </View>
                        </View>
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
                                Hacer Match
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

export default SectionFour

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    question: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 8,
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
