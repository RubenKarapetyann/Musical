import { Text } from "react-native"
import { View } from "react-native"
import { navigationProps } from "../../types/Props-Types"

export default function Track({ route } : navigationProps){
    return (
        <View>
            <Text style={{color : "white"}}>
                {route?.params.id}
            </Text>
        </View>
    )
}