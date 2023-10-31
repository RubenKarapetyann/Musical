const HOME = "home"
const SEARCH = "search"
const PROFILE = "profile"

export const TABS_MAP = {
    [HOME] : {
        displayName : "Home",
        id : 1,
        icon : "home-outline",
        activeIcon : "home"
    },
    [SEARCH] : {
        displayName : "Search",
        id : 2,
        icon : "search-outline",
        activeIcon : "search"
    },
    [PROFILE] : {
        displayName : "Profile",
        id : 3,
        icon : "albums-outline",
        activeIcon : "albums"
    }
}

export const TABS_ARR = [
    TABS_MAP[HOME],
    TABS_MAP[SEARCH],
    TABS_MAP[PROFILE]
]