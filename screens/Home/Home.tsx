import { Text, View } from "react-native";
import MassiveCard from "../../components/cards/MassiveCard/MassiveCard";
import { useState, useEffect } from "react"
import { ACCESS_TOKEN, SERVICE } from "../../constants/API";
import { MassiveCardProps } from "../../types/Props-Types";
import HomeCollector from "../../components/collectors/HomeCollector/HomeCollector";

const arr = [
    {
        name : "system of a down",
        id : 4,
        image : "https://upload.wikimedia.org/wikipedia/en/6/64/SystemofaDownToxicityalbumcover.jpg",
    },
    {
        name : "Choup Suey!",
        id : 5,
        image : "https://upload.wikimedia.org/wikipedia/en/b/bc/System_of_a_down.jpg"
    },
    {
        name : "system of a down",
        id : 7,
        image : "https://upload.wikimedia.org/wikipedia/en/6/64/SystemofaDownToxicityalbumcover.jpg",
    }
]
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
            <HomeCollector list={arr} title="albums"/>
        </View>
    )
}