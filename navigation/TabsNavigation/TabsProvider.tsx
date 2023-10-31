import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { TABS_ARR, TABS_MAP } from "../../constants/TABS"
import Ionicons from "react-native-vector-icons/Ionicons"

const Tab = createBottomTabNavigator()


export default function TabsProvider() {
    return (
        <Tab.Navigator screenOptions={({ route })=>({
            tabBarActiveTintColor : "yellow",
            tabBarInactiveTintColor : "gray",
            tabBarIcon : ({ focused, color, size })=>{
                const iconName : string = TABS_MAP[route.name].icon

                return <Ionicons 
                    name={iconName}
                    size={size}
                    color={color}
                />
            }
        })}>
            {TABS_ARR.map(tab=>{
                return <Tab.Screen
                    component={tab.screen}
                    name={tab.name}
                    key={tab.id}                    
                />
            })}
        </Tab.Navigator>
    )
}