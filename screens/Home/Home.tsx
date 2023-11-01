import { Text, View } from "react-native";
import MassiveCard from "../../components/cards/MassiveCard/MassiveCard";
import { useState, useEffect } from "react"
import { ACCESS_TOKEN, SERVICE } from "../../constants/API";
import { MassiveCardProps } from "../../types/Props-Types";

export default function Home(){
    // const [example ,setExample] = useState<MassiveCardProps>({
    //     name : "",
    //     image : ""
    // })

    // useEffect(()=>{
    //     const get = async ()=>{
    //         const res = await fetch(`${SERVICE}/albums/2kJnIPJHIRZlfOx0TZEKBP`,{
    //             headers : {
    //                 Authorization : "Bearer " + ACCESS_TOKEN
    //             }
    //         })
    //         const result = await res.json()
    //         setExample({
    //             name : result.name,
    //             image : result.images[0].url
    //         })
    //     }
    //     get()
    // },[])

    return (
        <View>
            {/* <MassiveCard name={example.name} image={example.image} subTitle="sasdasdasdasdasdasdasdasdasdasdubtitle"/> */}
        </View>
    )
}