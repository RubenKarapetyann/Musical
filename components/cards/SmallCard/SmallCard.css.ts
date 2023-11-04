import { StyleSheet } from "react-native"
import { colors } from "../../../constants/COLORS"

const styles = StyleSheet.create({
    container : {
        height : 60,
        flex : 1,
        // backgroundColor : colors.gray,
        flexDirection : "row",
        alignItems : "center",
        padding : 10,
        paddingLeft : 20
    },
    name : {
        color : "white",
        fontSize : 17
    },
    artist : {
        color : colors.lightGray
    },
    infoContainer : {
        marginLeft : 10
    }
})

export default styles