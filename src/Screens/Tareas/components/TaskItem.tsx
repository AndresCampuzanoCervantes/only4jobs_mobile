import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import React from "react"
import colors from "../../../styles/colors"
import { Image } from "react-native-elements"

interface ITask {
    descripcion: string
    fecha: Date
    titulo: string
    categoria: string
}
interface ITaskItemProps {
    onPress: () => void
    task: ITask
}

const TaskItem = (props: ITaskItemProps) => {
    return (
        <View /*Principal*/ style={styles.container}>
            <View
                /*Izquierda*/ style={{
                    width: "80%",
                    justifyContent: "space-between",
                }}>
                <Text style={styles.textTitulo} numberOfLines={2}>
                    {props.task.titulo}
                </Text>
                <Text style={styles.text} numberOfLines={5}>
                    {props.task.descripcion}
                </Text>
                <Text style={styles.time}>
                    {props.task.fecha.toLocaleDateString("es", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                    })}
                </Text>
            </View>
            <View
                /*Derecha*/ style={{
                    width: "20%",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}>
                <TouchableOpacity
                    style={styles.buttonEliminar}
                    onPress={props.onPress}>
                    <Image
                        source={require("../../../recursos/images/trash-solid.png")}
                        style={{
                            height: 25,
                            width: 22,
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonEditar}
                    onPress={props.onPress}>
                    <Image
                        source={require("../../../recursos/images/pen-to-square-solid.png")}
                        style={{
                            height: 25,
                            width: 25,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonEliminar: {
        backgroundColor: colors.WHITE,
        borderRadius: 50,
        height: 45,
        width: 45,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonEditar: {
        backgroundColor: colors.WHITE,
        borderRadius: 50,
        height: 45,
        width: 45,
        justifyContent: "center",
        alignItems: "center",
    },

    container: {
        backgroundColor: colors.PURPLE,
        borderRadius: 10,
        flexDirection: "row",
        marginBottom: 8,
        height: 180,
        paddingHorizontal: 10,
        paddingVertical: 20,
    },

    text: {
        color: colors.WHITE,
        marginLeft: 10,
    },

    time: {
        color: colors.WHITE,
        marginLeft: 10,
        fontWeight: "700",
    },

    textTitulo: {
        color: colors.WHITE,
        marginLeft: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
})

export default TaskItem
