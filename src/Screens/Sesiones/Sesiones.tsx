import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { useState } from "react"
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import { Image, Text } from "react-native-elements"
import { Row, Table } from "react-native-table-component"
import DateCalendar from "../../components/DateCalendar"
import ViewSearch from "../../components/Search/ViewSearch"
import colors from "../../styles/colors"

const Sesiones = () => {
    const [initialDate, setInitialDate] = useState<Date>(new Date())
    const [finalDate, setFinalDate] = useState<Date>(new Date())
    const [isSession, setIsSession] = useState(false)
    const getStorage = async () => {
        const data = await AsyncStorage.getItem("sesion")
        console.log(data)
        if (data) {
            setIsSession(true)
        } else {
            setIsSession(false)
        }
    }

    const [tableHead, setTableHead] = useState([
        "Precio por sesion",
        "Numero de sesiones",
        "Modalidad",
        "Fecha",
    ])

    const [tableData, setTableData] = useState([
        ["1", "2", "3", "4"],
        ["a", "b", "c", "d"],
        ["1", "2", "3", "4"],
        ["a", "b", "c", "d"],
        ["a", "b", "c", "d"],
    ])

    const [search, setSearch] = useState("")

    const [widthArr, setWidthArr] = useState([100, 100, 100, 100])

    const onChange = (search: string) => {
        console.log(search)
        setSearch(search)
    }

    const onFilter = () => {
        console.log(initialDate, finalDate)
    }

    return (
        <View>
            <View style={styles.containerButtonsCalendar}>
                <DateCalendar
                    buttonStyles={{ marginTop: 10 }}
                    date={initialDate}
                    setDate={date => setInitialDate(date)}
                />
                <DateCalendar
                    buttonStyles={{ marginTop: 10 }}
                    date={finalDate}
                    setDate={date => setFinalDate(date)}
                />
                <TouchableOpacity style={styles.btnMain} onPress={onFilter}>
                    <Image
                        source={require("../../recursos/images/Filtro_White.png")}
                        style={{ height: 28, width: 28, marginRight: 10 }}
                    />
                    <Text style={styles.btntxt}>Filtro</Text>
                </TouchableOpacity>
            </View>

            <ViewSearch setSearch={setSearch} />

            <ScrollView
                contentContainerStyle={{ alignItems: "center", width: "100%" }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                    style={{
                        borderRadius: 12,
                        overflow: "hidden",
                        alignItems: "center",
                        width: "100%",
                        marginTop: 4,
                    }}>
                    <Table
                        borderStyle={{
                            borderWidth: 1,
                            borderColor: "#C1C0B9",
                        }}>
                        <Row
                            data={tableHead}
                            widthArr={widthArr}
                            style={styles.header}
                            textStyle={styles.text}
                        />
                    </Table>
                    <ScrollView
                        style={styles.dataWrapper}
                        showsVerticalScrollIndicator={false}>
                        <Table
                            borderStyle={{
                                borderWidth: 1,
                                borderColor: "#C1C0B9",
                            }}>
                            {tableData
                                .filter((item: any) =>
                                    item.some((item: any) => {
                                        if (typeof item === "string") {
                                            return item
                                                .toLowerCase()
                                                .includes(search.toLowerCase())
                                        }
                                        return false
                                    })
                                )
                                .map((rowData, index) => (
                                    <Row
                                        key={index}
                                        data={rowData}
                                        widthArr={widthArr}
                                        style={[
                                            styles.row,
                                            index % 2
                                                ? {
                                                      backgroundColor:
                                                          colors.WHITE,
                                                  }
                                                : {},
                                        ]}
                                        textStyle={styles.textEntries}
                                    />
                                ))}
                        </Table>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default Sesiones

const styles = StyleSheet.create({
    containerButtonsCalendar: {
        width: "90%",
        alignSelf: "center",
    },
    container: {
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 5,
        backgroundColor: "#fff",
    },
    header: { height: 50, backgroundColor: colors.PURPLE },
    text: { textAlign: "center", fontWeight: "bold", color: colors.WHITE },
    textEntries: {
        textAlign: "center",
        fontWeight: "bold",
        color: colors.PINK2,
    },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: colors.PINK },

    btntxt: {
        textAlign: "center",
        fontSize: 17,
        color: colors.WHITE,
        paddingVertical: 12,
        fontFamily: "Poppins-Bold",
    },

    btnMain: {
        width: "100%",
        marginTop: 6,
        marginBottom: 6,
        backgroundColor: colors.PURPLE,
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
})
