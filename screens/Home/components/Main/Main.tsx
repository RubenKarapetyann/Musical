import { ScrollView } from "react-native"
import styles from "./Main.css"
import { useEffect, useState } from "react"
import WebApiCalls from "../../../../utils/api/WebApiCalls"
import { GET } from "../../../../constants/API"
import HomeCollector from "../../../../components/collectors/HomeCollector/HomeCollector"
import endpoints from "../../../../endpoints/endpoints"
import { collectionType } from "../../../../types/Global-Types"
import { navigationProps } from "../../../../types/Props-Types"


export default function Main({ navigation } : navigationProps){
    const [data, setData] = useState<collectionType[]>([])

    useEffect(()=>{
        const getAlbums = async ()=> {
            Promise.all([
                await WebApiCalls(endpoints().releases,GET),
                await WebApiCalls(endpoints().featured,GET)
            ]).then(result=>{
                setData([
                    {
                        items : result[0].albums.items,
                        id : Math.random(),
                        title : "Albums"
                    },
                    {
                        items : result[1].playlists.items,
                        id : Math.random(),
                        title : "Playlist"
                    },    
                ])      
            })
        }
        getAlbums()
    },[])

    const SingleItemHandle = (id : string)=>{
        navigation.navigate("playlist", { id })
    }

    return (
        <ScrollView style={styles.container}>
            {data.length ? data.map(data=>{
                return <HomeCollector list={data.items} title={data.title} key={data.id} handle={SingleItemHandle}/>
            }) : null}
        </ScrollView> 
    )
}