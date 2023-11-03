import { StyleSheet } from "react-native"
import { colors } from "../../../../../constants/COLORS"

const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.black,
    },
    title : {
        color : colors.gray,
        fontSize : 25,
        marginRight : "auto",
        marginLeft : "auto"
    },
    icon : {
        marginRight : "auto",
        marginLeft : "auto",
        marginTop : 230
    }
})

export default styles