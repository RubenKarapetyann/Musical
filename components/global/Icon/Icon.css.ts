import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container : {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        width : 50,
        height : 50,
        position : "relative"
    },
    circle : {
        width : 12,
        height : 12,
        zIndex : 2,
        backgroundColor : "red",
        borderRadius : 50,
        position : "absolute",
        right : 0,
        top : 0,
        padding : 1,
        display : "flex",
        // justifyContent : "center",
        alignItems : "center",
    },
    circleText : {
        color : "white",
        height : 12,
        width : 10,
        fontSize : 10,
        textAlignVertical : "center",
        textAlign : "center",
        marginTop : -2.5
    }
})


export default styles