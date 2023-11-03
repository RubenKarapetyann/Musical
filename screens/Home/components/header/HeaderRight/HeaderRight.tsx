import { View } from "react-native";
import Icon from "../../../../../components/global/Icon/Icon";
import styles from "./HeaderRight.css";
import { TOOLS_ARR } from "../../../../../constants/HOME_TOOLS_STACK";
import { navigationProps } from "../../../../../types/Props-Types";

export default function HeaderRight({ navigation } : navigationProps){  
    return (
        <View style={styles.container}>
            {TOOLS_ARR.map(stack=>{
                const pressHandle = ()=> navigation.navigate(stack.stack)  
                return (
                    <Icon 
                        name={stack.icon}
                        size={25} 
                        key={stack.id}
                        pressHandle={pressHandle}
                    />
                )
            })}
        </View>
    )
}