import { View } from "react-native";
import Icon from "../../../../../components/global/Icon/Icon";
import styles from "./HeaderRight.css";
import { TOOLS_ARR } from "../../../../../constants/HOME_TOOLS_STACK";

export default function HeaderRight(){
    return (
        <View style={styles.container}>
            {TOOLS_ARR.map(stack=>{
                return (
                    <Icon 
                        name={stack.icon}
                        size={25}
                        key={stack.id}
                    />
                )
            })}
        </View>
    )
}