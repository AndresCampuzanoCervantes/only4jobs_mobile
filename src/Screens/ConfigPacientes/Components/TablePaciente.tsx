import { StyleSheet, View, ScrollView } from "react-native"
import React, { useState } from "react"
import { Table, Row } from "react-native-table-component"
import colors from "../../../styles/colors"

const TablePaciente = (props: any) => {
    const [tableHead, setTableHead] = useState([
        "Nombre",
        "Apellido",
        "Correo",
        "Telefono",
        "Password",
        "Estado",
        "Acciones",
    ])

    //tabla
    const [widthArr, setWidthArr] = useState([
        100, 100, 100, 100, 100, 100, 100,
    ])

    return (
        <View style={styles.containerTable}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View>
                    <Table
                        borderStyle={{
                            borderWidth: 1,
                            borderColor: "#C1C0B9",
                        }}>
                        <Row
                            data={tableHead}
                            widthArr={widthArr}
                            style={styles.headerTable}
                            textStyle={styles.textTable}
                        />
                    </Table>
                    <ScrollView
                        style={styles.dataWrapper}
                        showsVerticalScrollIndicator={false}>
                        {props.data && props.data.length > 0 && (
                            <Table
                                borderStyle={{
                                    borderWidth: 1,
                                    borderColor: "#C1C0B9",
                                }}>
                                {props.search !== ""
                                    ? props.data
                                          .filter((item: any) =>
                                              item.some((item: any) => {
                                                  if (
                                                      typeof item === "string"
                                                  ) {
                                                      return item
                                                          .toLowerCase()
                                                          .includes(
                                                              props.search.toLowerCase()
                                                          )
                                                  }
                                                  return false
                                              })
                                          )
                                          .map(
                                              (rowData: any, index: number) => (
                                                  <Row
                                                      key={index}
                                                      data={rowData ?? []}
                                                      widthArr={widthArr}
                                                      style={[
                                                          styles.rowTable,
                                                          index % 2
                                                              ? {
                                                                    backgroundColor:
                                                                        colors.WHITE,
                                                                }
                                                              : {},
                                                      ]}
                                                      textStyle={
                                                          styles.textEntries
                                                      }
                                                  />
                                              )
                                          )
                                    : props.data.map(
                                          (rowData: any, index: number) => (
                                              <Row
                                                  key={index}
                                                  data={rowData ?? []}
                                                  widthArr={widthArr}
                                                  style={[
                                                      styles.rowTable,
                                                      index % 2
                                                          ? {
                                                                backgroundColor:
                                                                    colors.WHITE,
                                                            }
                                                          : {},
                                                  ]}
                                                  textStyle={styles.textEntries}
                                              />
                                          )
                                      )}
                            </Table>
                        )}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default TablePaciente

const styles = StyleSheet.create({
    containerTable: {
        paddingTop: 30,
        paddingHorizontal: 5,
        backgroundColor: colors.WHITE,
        flex: 1,
        alignSelf: "center",
    },
    headerTable: { height: 50, backgroundColor: colors.PURPLE },
    textTable: { textAlign: "center", fontWeight: "bold", color: colors.WHITE },
    textEntries: {
        textAlign: "center",
        fontWeight: "bold",
        color: colors.PINK2,
    },
    dataWrapper: { marginTop: -1 },
    rowTable: { height: 40, backgroundColor: colors.PINK },
})
