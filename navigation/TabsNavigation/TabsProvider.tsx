import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HOME, TABS_ARR, TABS_MAP } from "../../constants/TABS"
import Ionicons from "react-native-vector-icons/Ionicons"
import { colors } from "../../constants/COLORS"
import Playlist from "../../screens/Playlist/Playlist"
import BackButton from "../../components/global/BackButton/BackButton"

const Tab = createBottomTabNavigator()


export default function TabsProvider() {    
    return (
        <Tab.Navigator 
            initialRouteName={HOME}
            sceneContainerStyle={{
                backgroundColor : colors.black
            }}
            screenOptions={({ route })=>({
                tabBarActiveTintColor : colors.main,
                tabBarInactiveTintColor : colors.lightGray,
                tabBarIcon : ({ focused, color, size })=>{
                    if(!TABS_MAP[route.name].needTab)
                        return
                    const icon = focused ? "activeIcon" : "icon"
                    const iconName : string = TABS_MAP[route.name][icon]

                    return <Ionicons 
                        name={iconName}
                        size={30}
                        color={color}
                    />
                },
                // headerShown : false,
                tabBarStyle : {
                    backgroundColor : "rgba(30,30,30,0.2)",
                    position : "absolute",
                    borderBlockColor : "black",
                    height : 70,
                    // animate : ()=>
                },
                tabBarItemStyle : {
                    marginTop : 10
                },
                tabBarLabelStyle : {
                    marginBottom : 8,
                },
                // tabBarShowLabel : false,
                headerTitleStyle : {
                    fontSize : 30
                },
                headerStyle : {
                    // height : 200
                },
            })}
        >
            {TABS_ARR.map(tab=>{
                return <Tab.Screen
                    component={tab.screen}
                    name={tab.name}
                    key={tab.id}       
                    options={({ navigation })=>({
                        title : tab.displayName,
                        headerTintColor : "white",
                        headerShown : tab.needHeader,
                        headerStyle : {
                            backgroundColor : colors.black
                        },
                        headerLeft : tab.needTab ? tab.HeaderLeft : ()=> <BackButton navigation={navigation}/>,
                        tabBarItemStyle : {
                            display : tab.needTab ? "flex" : "none"
                        }
                    })}             
                />
            })}
        </Tab.Navigator>
    )
}