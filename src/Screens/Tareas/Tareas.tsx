import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    Alert,
} from "react-native"
import React, { useState } from "react"
import colors from "../../styles/colors"
import { ScreenHeight } from "react-native-elements/dist/helpers"
import { TextInput } from "react-native-paper"
import TaskItem from "./components/TaskItem"
import ListHeader from "./components/ListHeader"
import { Image } from "react-native-elements"
import ViewContainerModal from "../../components/Modal/ViewContainerModal"
import DatePickerComponent from "../../components/DatePickerComponent/DatePickerComponent"

import AlertSuccessful from "../../components/ViewAlert/AlertSuccessful"
import AnimatedLottieView from "lottie-react-native"

const Tareas = (props: any) => {
    const [addNew, setAddNew] = useState(false)
    const [tasks, setTasks] = useState<any[]>([])
    const [open, setOpen] = useState(false)
    const [visible, setVisible] = useState(false)

    const [date, setDate] = useState(new Date())
    const [errors, setErrors] = useState({
        titulo: "",
        categoria: "",
        descripcion: "",
    })

    // funcion mostrar alerta en pantalla
    const [alertVisible, setAlertVisible] = useState(false)

    const showAlert = () => {
        if (alertVisible) {
            return (
                <AlertSuccessful
                    title="Agregado"
                    message="Se añadio Exitosamente"
                    visible={alertVisible}
                    icon={require("../../recursos/jsonAnime/successful.json")}>
                    <TouchableOpacity
                        style={{
                            ...styles.openButton,
                            backgroundColor: colors.PURPLE,
                        }}
                        onPress={() => {
                            setAlertVisible(!alertVisible)
                        }}>
                        <Text style={styles.okStyle}>Ok</Text>
                    </TouchableOpacity>
                </AlertSuccessful>
            )
        }
    }

    const [task, setTask] = useState({
        descripcion: "",
        fecha: new Date(),
        titulo: "",
        categoria: "",
    })

    const cleanStates = () => {
        setErrors({
            titulo: "",
            categoria: "",
            descripcion: "",
        })
    }

    const addTask = () => {
        let err = { titulo: "", categoria: "", descripcion: "" }

        if (!task.titulo) err = { ...err, titulo: "*Campo Requerido" }
        if (!task.categoria) err = { ...err, categoria: "*Campo Requerido" }
        if (!task.descripcion) err = { ...err, descripcion: "*Campo Requerido" }

        if (
            err.titulo !== "" ||
            err.categoria !== "" ||
            err.descripcion !== ""
        ) {
            setErrors(_errors => ({ ..._errors, ...err }))
        } else {
            setTasks(currentTasks => [...currentTasks, task])
            setTask({
                descripcion: "",
                fecha: new Date(),
                titulo: "",
                categoria: "",
            })
            setVisible(false)
            cleanStates()
            setAlertVisible(true)
        }
    }

    const deleteTask = (index: number) => {
        let temp = [...tasks]
        temp.splice(index, 1)
        setTasks(temp)
    }

    const handleChange = <T,>(value: T, name: string) => {
        if (name in task) {
            setTask({ ...task, [name]: value })
        } else {
            console.error(`La propiedad ${name} no existe en el objeto`)
        }

        cleanStates()
    }

    return (
        <SafeAreaView style={[styles.safeArea]}>
            <ViewContainerModal visible={visible}>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            onPress={() => {
                                setVisible(false)
                                cleanStates()
                            }}>
                            <Image
                                source={require("../../recursos/images/x.png")}
                                style={{ height: 10, width: 30 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.modalMainContainer}>
                    <View>
                        <TextInput
                            mode="outlined"
                            onChangeText={e => handleChange(e, "titulo")}
                            label="Titulo"
                            outlineStyle={{
                                borderColor: colors.PURPLE,
                                borderWidth: 2,
                            }}
                            value={task.titulo}
                        />
                        {errors.titulo ? (
                            <Text style={styles.errorLabel}>
                                {errors.titulo}
                            </Text>
                        ) : null}

                        <TextInput
                            onChangeText={e => handleChange(e, "categoria")}
                            mode="outlined"
                            label="Categoria"
                            outlineStyle={{
                                borderColor: colors.PURPLE,
                                borderWidth: 2,
                            }}
                            value={task.categoria}
                        />
                        {errors.categoria ? (
                            <Text style={styles.errorLabel}>
                                {errors.categoria}
                            </Text>
                        ) : null}

                        <TextInput
                            onChangeText={e => handleChange(e, "descripcion")}
                            mode="outlined"
                            label="Descripcion"
                            outlineStyle={{
                                borderColor: colors.PURPLE,
                                borderWidth: 2,
                            }}
                            value={task.descripcion}
                            maxLength={190}
                        />
                        {errors.descripcion ? (
                            <Text style={styles.errorLabel}>
                                {errors.descripcion}
                            </Text>
                        ) : null}

                        <DatePickerComponent
                            date={date}
                            onChange={(date: Date) =>
                                handleChange(date, "fecha")
                            }
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                marginBottom: 6,
                                marginTop: 10,
                            }}>
                            <TouchableOpacity
                                style={[styles.button, styles.acceptButton]}
                                onPress={addTask}>
                                <Text style={styles.buttonText}>Agregar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ViewContainerModal>
            <View>
                <FlatList
                    data={tasks}
                    keyExtractor={(item, index) => `${index}`}
                    renderItem={({ item, index }) => (
                        <TaskItem
                            task={item}
                            onPress={() => deleteTask(index)}
                        />
                    )}
                    ListHeaderComponent={<ListHeader />}
                />
            </View>

            <View style={styles.addButtonLocator}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => setVisible(true)}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>

            {/*  mostrar alerta en pantalla */}
            {showAlert()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    acceptButton: {
        marginTop: 10,
        backgroundColor: colors.PURPLE,
    },

    addButton: {
        alignItems: "center",
        backgroundColor: colors.PINK2,
        borderRadius: 40,
        height: 60,
        justifyContent: "center",
        width: 60,
    },

    addButtonLocator: {
        right: 10,
        top: ScreenHeight - 200,
        position: "absolute",
    },

    addButtonText: {
        color: colors.WHITE,
        fontSize: 25,
    },

    button: {
        alignSelf: "flex-start",
        borderRadius: 10,
        flex: 1,
        padding: 10,
    },

    buttonText: {
        fontSize: 15,
        color: colors.WHITE,
        textAlign: "center",
    },

    input: {
        marginTop: 10,
        borderRadius: 10,
        paddingHorizontal: 10,
    },

    calendar: {
        borderColor: colors.PURPLE,
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 8,
        width: "100%",
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    safeArea: {
        margin: 5,
        borderColor: colors.PURPLE,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        flex: 1,
    },

    modalMainContainer: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,
    },

    header: {
        width: "100%",
        height: 40,
        justifyContent: "center",
        marginTop: -21,
        marginLeft: "190%",
    },

    errorText: {
        fontSize: 14,
        color: colors.PINK2,
        marginBottom: 5,
        marginLeft: 20,
    },
    errorLabel: {
        marginTop: 10,
        fontSize: 14,
        color: colors.PINK2,
        marginBottom: 5,
        marginLeft: 20,
    },
    header2: {
        height: 80,
        width: "100%",
        backgroundColor: "rgb(255, 255, 255)",
        alignItems: "stretch",
        justifyContent: "center",
        zIndex: 1,
    },

    okStyle: {
        color: colors.WHITE,
        textAlign: "center",
        fontSize: 20,
    },
    openButton: {
        backgroundColor: colors.PURPLE,
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        width: "50%",
        marginTop: 40,
    },
})

export default Tareas
