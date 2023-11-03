import Main from "../screens/Home/components/Main/Main"
import Notifications from "../screens/Home/components/tools/Notifications/Notifications"
import Recent from "../screens/Home/components/tools/Recent/Recent"
import Settings from "../screens/Home/components/tools/Settings/Settings"
import { IHomeToolStack } from "../types/HomeToolsStack-Types"

export const NOTIFICATIONS : string = "notifications"
export const RECENT : string = "recent"
export const SETTINGS : string = "settings"
export const HOME : string = "main-home"

export const TOOLS_MAP = {
    [NOTIFICATIONS] : {
        displayName : "Notifications",
        id : 1,
        icon : "notifications",
        stack : NOTIFICATIONS,
        screen : Notifications
    },
    [RECENT] : {
        displayName : "Recent",
        id : 2,
        icon : "time",
        stack : RECENT,
        screen : Recent
    },
    [SETTINGS] : {
        displayName : "Settings",
        id : 3,
        icon : "settings-sharp",
        stack : SETTINGS,
        screen : Settings
    },
    [HOME] : {
        displayName : "Home",
        id : 4,
        icon : "",
        stack : HOME,
        screen : Main 
    }
}

export const TOOLS_ARR : Array<IHomeToolStack> = [
    TOOLS_MAP[NOTIFICATIONS],
    TOOLS_MAP[RECENT],
    TOOLS_MAP[SETTINGS]
]