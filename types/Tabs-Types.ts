import { FunctionComponent, ReactNode } from "react";

export interface ITab{ 
    displayName : string,
    id : number,
    icon : string,
    activeIcon : string,
    screen : FunctionComponent,
    name : string,
    headerLeft? : ReactNode
}