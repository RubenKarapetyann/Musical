import { FunctionComponent } from "react";

export interface ITab{ 
    displayName : string,
    id : number,
    icon : string,
    activeIcon : string,
    screen : FunctionComponent,
    name : string,
    HeaderLeft? : FunctionComponent,
    needHeader : boolean,
    needTab : boolean,
    backButtonIcon? : string
}