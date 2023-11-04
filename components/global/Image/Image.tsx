import { View, Image } from "react-native"
import { imageProps } from "../../../types/Props-Types"
import importedStyles from "./Image.css"

export default function MainImage({ url, size = 200, styles }: imageProps){
    return (
        <View style={importedStyles.container}>
            <Image
                style={[styles, importedStyles.image]}
                source={{
                    uri : url
                }}
                width={size}
                height={size}
            />
        </View>
    )
}