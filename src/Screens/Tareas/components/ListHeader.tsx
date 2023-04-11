import { StyleSheet, Text, View } from "react-native"
import React from "react"
import colors from "../../../styles/colors"

const ListHeader = () => {
    return (
        <View style={{ marginBottom: 10 }}>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: colors.PURPLE,
                    textAlign: "center",
                }}>
                Mis Actividades
            </Text>
        </View>
    )
}

export default ListHeader

const styles = StyleSheet.create({})
