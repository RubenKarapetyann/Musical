import { StyleSheet } from "react-native"
import { colors } from "../../constants/COLORS"

const styles = StyleSheet.create({
    infoContainer : {
        marginLeft : 40,
        marginTop : 20
    },  
    artists : {
        color : colors.lightGray,
        fontSize : 15,
    },
    name : {
        fontSize : 20,
        color : "white"
    },
    trackLine : {
        width : 310,
        height : 3,
        borderRadius : 15,
        marginLeft : "auto",
        marginRight : "auto",
        marginTop : 25,
        backgroundColor : "white",
        justifyContent : "center"
    },
    tools : {
        flexDirection : "row",
        justifyContent : "space-around",
        width : 310,
        marginRight : "auto",
        marginLeft : "auto",
        marginTop : 60
    },
    moveButton : {
        color : "white",
        fontSize : 60,
    },
    circle : {
        width : 10,
        height : 10,
        backgroundColor : "white",
        borderRadius : 50
    }
})
export default styles