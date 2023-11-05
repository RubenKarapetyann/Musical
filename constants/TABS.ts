import Home from "../screens/Home/Home"
import Playlist from "../screens/Playlist/Playlist"
import Profile from "../screens/Profile/Profile"
import Search from "../screens/Search/Search"
import Track from "../screens/Track/Track"
import { ITab } from "../types/Tabs-Types"

export const HOME : string = "home"
export const SEARCH : string = "search"
export const PROFILE : string = "profile"
export const PLAYLIST : string = "playlist"
export const TRACK : string = "track"

export const TABS_MAP = {
    [HOME] : {
        displayName : "Home",
        id : 1,
        icon : "home-outline",
        activeIcon : "home",
        screen : Home,
        name : HOME,
        needHeader : false,
        needTab : true
    },
    [SEARCH] : {
        displayName : "Search",
        id : 2,
        icon : "search-outline",
        activeIcon : "search",
        screen : Search,
        name : SEARCH,
        needHeader : true,
        needTab : true
    },
    [PROFILE] : {
        displayName : "Profile",
        id : 3,
        icon : "albums-outline",
        activeIcon : "albums",
        screen : Profile,
        name : PROFILE,
        needHeader : true,
        needTab : true
    },
    [PLAYLIST] : {
        displayName : "",
        id : 4,
        icon : "",
        activeIcon : "",
        screen : Playlist,
        name : PLAYLIST,
        needHeader : true,
        needTab : false,
        backButtonIcon : "arrow-left"
    },
    [TRACK] : {
        displayName : "",
        id : 5,
        icon : "",
        activeIcon : "",
        screen : Track,
        name : TRACK,
        needHeader : true,
        needTab : false,
        backButtonIcon : "chevron-down"
    }
}

export const TABS_ARR : ITab[] = [
    TABS_MAP[HOME],
    TABS_MAP[SEARCH],
    TABS_MAP[PROFILE],
    TABS_MAP[PLAYLIST],
    TABS_MAP[TRACK]
]