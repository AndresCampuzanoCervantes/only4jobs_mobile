import { StyleSheet, Text, View } from "react-native"
import colors from "../../../../../styles/colors"
import {
    SelectList,
    MultipleSelectList,
} from "react-native-dropdown-select-list"

const SelectListTS = (props: any) => {
    // datos de especialidad terapeuta

    const dataEspecialidades = [
        { key: "Psicoanálisis", value: "Psicoanálisis" },
        { key: "Cognitivo Conductual", value: "Cognitivo Conductual" },
        { key: "Integrativo", value: "Integrativo" },
        { key: "Sistémico", value: "Sistémico" },
        { key: "Humanista", value: "Humanista" },
    ]

    const dataPais = [
        { key: "Perú", value: "Perú" },
        { key: "México", value: "México" },
        { key: "Colombia", value: "Colombia" },
    ]

    return (
        <View style={{ paddingBottom: 1 }}>
            {/* especialidad */}
            <MultipleSelectList
                inputStyles={{
                    color: colors.PINK2,
                    fontSize: 15,
                    fontWeight: "bold",
                }}
                boxStyles={{
                    borderColor: colors.PURPLE,
                    borderWidth: 3,
                }}
                data={dataEspecialidades}
                setSelected={props.setSelected}
                label="Selected"
                save="value"
                fontFamily="regular"
                notFoundText="No data exists"
                dropdownStyles={{
                    marginTop: 10,
                    borderColor: "transparent",
                }}
                dropdownItemStyles={{
                    borderColor: colors.PURPLE,
                    borderWidth: 2,
                }}
                dropdownTextStyles={{
                    color: colors.PURPLE,
                    fontSize: 15,
                    fontWeight: "bold",
                    textAlign: "center",
                }}
                placeholder="Especialidades"
            />
            <View>
                <View style={{ paddingBottom: 1 }}>
                    {/* especialidad */}
                    <MultipleSelectList
                        inputStyles={{
                            color: colors.PINK2,
                            fontSize: 15,
                            fontWeight: "bold",
                        }}
                        boxStyles={{
                            borderColor: colors.PURPLE,
                            borderWidth: 3,
                        }}
                        data={dataPais}
                        setSelected={props.setSelected}
                        label="Selected"
                        save="value"
                        fontFamily="regular"
                        notFoundText="No data exists"
                        dropdownStyles={{
                            marginTop: 10,
                            borderColor: "transparent",
                        }}
                        dropdownItemStyles={{
                            borderColor: colors.PURPLE,
                            borderWidth: 2,
                        }}
                        dropdownTextStyles={{
                            color: colors.PURPLE,
                            fontSize: 15,
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                        placeholder="Paises"
                    />
                </View>
            </View>
        </View>
    )
}

export default SelectListTS

const styles = StyleSheet.create({})
