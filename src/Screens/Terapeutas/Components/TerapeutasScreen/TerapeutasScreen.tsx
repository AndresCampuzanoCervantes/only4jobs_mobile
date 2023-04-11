import React, { useState } from "react"
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert,
    Linking,
} from "react-native"
import { Button } from "react-native-paper"
import { useNavigate } from "../../../../Hooks/useNavigate"
import colors from "../../../../styles/colors"
import { mainStyles } from "../../../../styles/styles"
import CountryFlag from "react-native-country-flag"
import ModalTS from "./Components/ModalTS"

const TerapeutasScreen = () => {
    /*Array*/
    const data = [
        {
            url: "https://youtu.be/VKazmNa8haI",
            title: "Especialidad 3 Sergio Sanguinetti",
            descripcion:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta neque debitis asperiores vel provident quos rerum sint, delectus, porro officia aliquam quasi unde eius doloribus aliquid. Praesentium quia ullam commodi eius voluptatum. Odio soluta error voluptatem! Nobis, aliquam. Assumenda quibusdam vitae magnam temporibus nihil corrupti perferendis repellat illum dolorum debitis.",
            iso: "co",
            pais: "Colombia",
            ciudad: "Barranquilla",
            id: 1,
        },
        {
            url: "https://youtu.be/VKazmNa8haI",
            title: "Cognitivo Conductual Andrés Geada",
            descripcion:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta neque debitis asperiores vel provident quos rerum sint, delectus, porro officia aliquam quasi unde eius doloribus aliquid. Praesentium quia ullam commodi eius voluptatum. Odio soluta error voluptatem! Nobis, aliquam. Assumenda quibusdam vitae magnam temporibus nihil corrupti perferendis repellat illum dolorum debitis.",
            iso: "co",
            pais: "Colombia",
            ciudad: "Barranquilla",
            id: 2,
        },
        {
            url: "https://youtu.be/VKazmNa8haI",
            title: "Psicoanálisis LUIS JAVIER JUÁREZ ROSALES",
            descripcion:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta neque debitis asperiores vel provident quos rerum sint, delectus, porro officia aliquam quasi unde eius doloribus aliquid. Praesentium quia ullam commodi eius voluptatum. Odio soluta error voluptatem! Nobis, aliquam. Assumenda quibusdam vitae magnam temporibus nihil corrupti perferendis repellat illum dolorum debitis.",
            iso: "co",
            pais: "Colombia",
            ciudad: "Barranquilla",
            id: 3,
        },
        {
            url: "https://youtu.be/VKazmNa8haI",
            title: "Psicoanálisis Terapeuta 10 apellido",
            descripcion:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta neque debitis asperiores vel provident quos rerum sint, delectus, porro officia aliquam quasi unde eius doloribus aliquid. Praesentium quia ullam commodi eius voluptatum. Odio soluta error voluptatem! Nobis, aliquam. Assumenda quibusdam vitae magnam temporibus nihil corrupti perferendis repellat illum dolorum debitis.",
            iso: "co",
            pais: "Colombia",
            ciudad: "Barranquilla",
            id: 4,
        },
    ]
    const onNavigate = async (link: string) => {
        Linking.openURL(link)
    }
    const navigate = useNavigate()

    const [visible, setVisible] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <ModalTS visible={visible} />
                </View>
                <View style={styles.btnFilter}>
                    <Button
                        style={{ backgroundColor: colors.WHITE }}
                        mode="contained">
                        <Text style={{ color: colors.PURPLE }}>
                            FILTRO TERAPEUTAS
                        </Text>
                    </Button>
                </View>
                {data.map(item => (
                    <View key={item.id} style={styles.container2}>
                        <View
                            /*Arriba*/ style={{
                                width: "100%",
                                justifyContent: "space-between",
                                height: "60%",
                            }}>
                            <TouchableOpacity
                                onPress={() => onNavigate(item.url)}>
                                <View
                                    style={{
                                        backgroundColor: colors.GRAY,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                        borderRadius: 10,
                                    }}>
                                    <Image
                                        style={{
                                            height: 80,
                                            width: 110,
                                        }}
                                        source={require("../../../../recursos/images/Youtube_logo.png")}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View
                            /*Derecha*/ style={{
                                width: "100%",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexDirection: "row",
                            }}>
                            <View
                                style={{
                                    width: "70%",
                                }}>
                                <Text
                                    numberOfLines={2}
                                    style={{
                                        color: "black",
                                        fontWeight: "bold",
                                    }}>
                                    {item.title}
                                </Text>
                                <Text numberOfLines={4}>
                                    {item.descripcion}
                                </Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        width: 190,
                                        marginTop: 5,
                                    }}>
                                    <CountryFlag isoCode={item.iso} size={25} />
                                    <Text style={{ color: "black" }}>
                                        {item.pais}-{item.ciudad}
                                    </Text>
                                </View>
                            </View>
                            <View>
                                <TouchableOpacity
                                    style={styles.btnMain2}
                                    onPress={() =>
                                        navigate({
                                            screen: "TerapeutasDetail",
                                            params: { idTerapeuta: item.id },
                                        })
                                    }>
                                    <Image
                                        source={require("../../../../recursos/images/Pergamino.png")}
                                        style={{
                                            height: 28,
                                            width: 28,
                                            marginRight: 4,
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    container2: {
        backgroundColor: colors.WHITE,
        borderRadius: 10,
        marginBottom: 8,
        height: 350,
        width: "95%",
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderColor: colors.PURPLE,
        borderWidth: 2,
        alignSelf: "center",
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
    btnMain2: {
        padding: 10,
        backgroundColor: colors.PURPLE,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    btntxt: {
        textAlign: "center",
        fontSize: 17,
        color: colors.WHITE,
        paddingVertical: 15,
        fontFamily: "Poppins-Bold",
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
    btnFilter: {
        width: "80%",
        marginBottom: 10,
        backgroundColor: colors.WHITE,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
})

export default TerapeutasScreen
