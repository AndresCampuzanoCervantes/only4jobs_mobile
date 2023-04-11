import { StyleSheet, Text, View } from "react-native"
import colors from "../../../styles/colors"
import { SelectList } from "react-native-dropdown-select-list"

const SelectListTerapia = (props: any) => {
    // datos de especialidad terapeuta

    const dataTipoTerapia = [{ key: "Online", value: "Online" }]

    return (
        <View>
            {/* especialidad */}

            <SelectList
                inputStyles={{
                    color: colors.PINK2,
                    fontSize: 16,
                    fontWeight: "bold",
                }}
                boxStyles={{
                    borderColor: colors.PURPLE,
                    borderWidth: 3,
                }}
                data={dataTipoTerapia}
                setSelected={props.setSelected}
                dropdownStyles={{
                    marginTop: -2,
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
                placeholder="Seleccione Un Tipo De Terapia"
                maxHeight={100}
            />
        </View>
    )
}

export default SelectListTerapia

const styles = StyleSheet.create({})
