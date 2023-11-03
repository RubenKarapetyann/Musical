import Home from "../screens/Home/Home"
import Profile from "../screens/Profile/Profile"
import Search from "../screens/Search/Search"
import { ITab } from "../types/Tabs-Types"

export const HOME : string = "home"
export const SEARCH : string = "search"
export const PROFILE : string = "profile"

export const TABS_MAP = {
    [HOME] : {
        displayName : "Home",
        id : 1,
        icon : "home-outline",
        activeIcon : "home",
        screen : Home,
        name : HOME,
        needHeader : false,
    },
    [SEARCH] : {
        displayName : "Search",
        id : 2,
        icon : "search-outline",
        activeIcon : "search",
        screen : Search,
        name : SEARCH,
        needHeader : true,
    },
    [PROFILE] : {
        displayName : "Profile",
        id : 3,
        icon : "albums-outline",
        activeIcon : "albums",
        screen : Profile,
        name : PROFILE,
        needHeader : true,
    }
}

export const TABS_ARR : ITab[] = [
    TABS_MAP[HOME],
    TABS_MAP[SEARCH],
    TABS_MAP[PROFILE]
]