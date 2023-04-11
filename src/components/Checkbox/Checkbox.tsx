import { ICheckBoxProps } from "../../interfaces/components"
import React from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { useStylesCheckbox } from "./styles"

const Checkbox = (props: ICheckBoxProps) => {
    const { styles, variants } = useStylesCheckbox()

    const style = StyleSheet.flatten([
        styles.checkContainer,
        { borderColor: variants[props.variant ?? "primary"].borderColor },
        props.variant === "noShow" ? variants.noShow : {},
        props.style,
    ])

    const onToggle = () => {
        props.toggleValue()
    }

    return (
        <TouchableOpacity
            disabled={props.disabled}
            onPress={onToggle}
            style={props.containerStyle}>
            {props.orientation === "right" && props.children}
            <View style={style}>
                <View
                    style={[
                        styles.innerCheck,
                        variants[
                            props.value
                                ? props.variant ?? "primary"
                                : "transparent"
                        ],
                    ]}
                />
            </View>
            {(!props.orientation || props.orientation === "left") &&
                props.children}
        </TouchableOpacity>
    )
}

export default Checkbox
