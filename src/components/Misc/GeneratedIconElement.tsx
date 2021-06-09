import React, {Suspense} from "react";
import * as eyeCons from "@material-ui/icons";

const eyeConsKVP = Object
    .entries(eyeCons)
    .sort((a,b) =>{
        return a[0].toLowerCase() > b[0].toLowerCase()
            ? 1
            : -1;
});

export default function GenerateIcon(name: any) {
    const match = eyeConsKVP.filter((itm) => {
        return itm[0].toLowerCase().startsWith(name?.toLowerCase() ?? "")
    }) ?? new Array<any>();

    if ((match?.length ?? 0) === 0) {
        return (<button>{name}</button>);
    }

    const GeneratedIcon = match[0][1];

    return (
        <Suspense fallback={<span>loading...</span>}>
            <GeneratedIcon />
        </Suspense>
    );
}