import { LogBox, ScrollView, StyleSheet, View } from "react-native"
import React, { Component, useState } from "react"
import { Table, Row } from "react-native-table-component"
import colors from "../../styles/colors"
import ViewSearch from "../../components/Search/ViewSearch"

const Pacientes = () => {
    const [tableHead, setTableHead] = useState([
        "Nombre",
        "Apellido",
        "Correo",
        "Telefono",
        "Acciones",
        "Documentos",
    ])
    LogBox.ignoreLogs(["Invalid prop textStyle of type array supplied to Cell"])

    const [tableData, setTableData] = useState([
        ["1", "2", "3", "4", "5", "6"],
        ["a", "b", "c", "d", "e", "f"],
        ["1", "2", "3", "4", "5", "6"],
        ["a", "b", "c", "d", "e", "f"],
        ["a", "b", "c", "d", "e", "f"],
    ])

    const [search, setSearch] = useState("")

    const onChange = (search: string) => {
        console.log(search)
        setSearch(search)
    }

    const [widthArr, setWidthArr] = useState([100, 100, 100, 100, 120, 120])

    return (
        <View style={styles.container}>
            <ViewSearch setSearch={setSearch} />
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                    style={{
                        borderRadius: 12,
                        overflow: "hidden",
                    }}>
                    <Table
                        style={{ marginTop: 10 }}
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

export default Pacientes

const styles = StyleSheet.create({
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
})
