import { createStackNavigator } from "@react-navigation/stack"
import { TOOLS_ARR, TOOLS_MAP } from "../../constants/HOME_TOOLS_STACK"
import Main from "../../screens/Home/components/Main/Main"
import { colors } from "../../constants/COLORS"
import HeaderRight from "../../screens/Home/components/header/HeaderRight/HeaderRight"
import { HOME as HOME_MAIN } from "../../constants/HOME_TOOLS_STACK" 
import HeaderLeft from "../../screens/Home/components/header/HeaderLeft/HeaderLeft"

const Stack = createStackNavigator()

export default function HomeToolsStackProvider(){
    
    return (
        <Stack.Navigator 
            initialRouteName={HOME_MAIN}
            screenOptions={()=>({
                headerTitleStyle : {
                    fontSize : 30
                }
            })}
        >
            <Stack.Screen 
                component={Main} 
                name={HOME_MAIN}
                options={({ navigation })=>({
                    title : TOOLS_MAP[HOME_MAIN].displayName,
                    headerTintColor : "white",
                    headerStyle : {
                        backgroundColor : colors.black
                    },
                    headerLeft : ()=> <HeaderLeft/>,
                    headerRight : ()=> <HeaderRight navigation={navigation}/>
                })}     
            />
            {TOOLS_ARR.map(tool=>{
                return (
                    <Stack.Screen
                        component={tool.screen}
                        name={tool.stack}
                        key={tool.id}
                    />
                )
            })}
        </Stack.Navigator>
    )
}