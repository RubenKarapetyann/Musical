import Notifications from "../screens/tools/Notifications/Notifications"
import Recent from "../screens/tools/Recent/Recent"
import Settings from "../screens/tools/Settings/Settings"
import { IHomeToolStack } from "../types/HomeToolsStack-Types"

export const NOTIFICATIONS = "notifications"
export const RECENT = "recent"
export const SETTINGS = "settings"

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
    }
}

export const TOOLS_ARR : Array<IHomeToolStack> = [
    TOOLS_MAP[NOTIFICATIONS],
    TOOLS_MAP[RECENT],
    TOOLS_MAP[SETTINGS]
]