import { StyleSheet } from "react-native"
import { colors } from "../../../constants/COLORS"

const styles = StyleSheet.create({
    container : {
        width : 170,
        height : 250,
        padding : 15,
        display : "flex",
        justifyContent : "center",
        alignItems : "center"
    },
    title : {
        fontSize : 14,
        color : "white",
        marginTop : 10,
    },
    subTitle : {
        color : colors.textGray,
        fontSize : 13,
        marginTop : 2,
    }
})

export default styles