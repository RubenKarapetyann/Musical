import { ScrollView, Text, TouchableOpacity } from "react-native"
import { View } from "react-native"
import { navigationProps } from "../../types/Props-Types"
import { useEffect, useState } from "react"
import endpoints from "../../endpoints/endpoints"
import { GET } from "../../constants/API"
import WebApiCalls from "../../utils/api/WebApiCalls"
import { artistType, trackType } from "../../types/Global-Types"
import MainImage from "../../components/global/Image/Image"
import styles from "./Track.css"
import AntDesign from "react-native-vector-icons/AntDesign"
import { Audio } from 'expo-av'
import { Sound } from "expo-av/build/Audio"

export default function Track({ route } : navigationProps){
    const [track, setTrack] = useState<trackType | null>(null)
    const [isPoused, setIsPoused] = useState<boolean>(false)
    const [audio, setAudio] = useState<Sound | null>(null)
    const id = route?.params.id

    useEffect(()=>{
        const getTrack = async ()=>{
            const result = await WebApiCalls(endpoints(id).track,GET)
            setTrack({
                name : result.name,
                id : result.id,
                image : result.album.images[0].url,
                artists : result.album.artists.map((artist:artistType)=>({name : artist.name, id : artist.id}))         
            })
            const { sound } = await Audio.Sound.createAsync(require("../../material/tracks/radio.mp3"),{ shouldPlay: true })
            setAudio(sound)
        }
        getTrack()
        
    },[id])

    const playSound = async () => {    
        await audio?.playAsync();
    }

    const stopSound = async ()=>{
        await audio?.pauseAsync()
    }
    
    useEffect(() => {
        return audio
          ? () => {
              audio.unloadAsync();
            }
          : undefined
    }, [audio])

    if(!track){
        return
    }

    const pouseHandle = ()=> {
        isPoused ? playSound() : stopSound()
        setIsPoused(state=>!state)
    }

    return (
        <ScrollView>
            <View>
                <MainImage url={track.image} size={320}/>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{track.name}</Text>
                <Text style={styles.artists}>{track.artists.map(artist=>artist.name).join(", ")}</Text>
            </View>
            <View style={styles.trackLine}>
                <View style={styles.circle}>
                    
                </View>
            </View>
            <View style={styles.tools}>
                <TouchableOpacity>
                    <AntDesign name="stepbackward" style={styles.moveButton}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={pouseHandle}>
                    <AntDesign name={isPoused ? "playcircleo" : "pausecircle"}style={styles.moveButton}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="stepforward" style={styles.moveButton}/>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}