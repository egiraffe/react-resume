import React, {useEffect} from "react";
import {Rating} from "@material-ui/lab"
import ProficiencyModel from "./Models/ProficiencyModel";
import {Box, Grid, GridSize, Hidden, Typography, useMediaQuery} from "@material-ui/core";
import {useTheme} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey";
import json2mq from "json2mq";

export default function Proficiency(info: ProficiencyModel) {
    const theme = useTheme();

    const proficiencyLabels: { [index: number]: any } = {
        0.5: {
            label: 'Novice',
            backgroundColor: grey[50],
            color: theme.palette.primary
        },
        1.5: {
            label: 'Beginner',
            backgroundColor: theme.palette.secondary.light,
        },
        2.5: {
            label: 'Competent',
            backgroundColor: theme.palette.secondary.dark,
        },
        3.5: {
            label: 'Proficient',
            backgroundColor: theme.palette.primary.light,
        },
        4.5: {
            label: 'Expert',
            backgroundColor: theme.palette.primary.dark,
        }
    };

    function getClosetValue(): number {
        const keys = Array.from(Object.keys(proficiencyLabels), (e) => {
            return Number(e)
        }).sort();

        return keys.reduce((pv, cv) => {
            return info.Level >= cv
                ? cv
                : pv;
        });
    }

    function getLabel(): string {
        let value: string;
        const closetValue = getClosetValue();
        value = proficiencyLabels[closetValue].label;
        if (info.Level > closetValue){
            value += "++";
        }
        return value;
    }

    const [xsValue, setXsValue] = React.useState<GridSize>(6);
    const [isPrint, setIsPrint] = React.useState<boolean>(false);

    window.addEventListener("beforeprint", () => setIsPrint(true));
    window.addEventListener("afterprint", () => setIsPrint(false));

    const specialXs = useMediaQuery(json2mq({
        maxWidth: "800px"
    }))



    useEffect(() => {
        setXsValue(specialXs ? 6 : 12)
    }, [specialXs])

    function inline(){
        return (<Grid item xs={6} sm={6} md={6}>
            <Typography variant={"subtitle1"} component={"legend"}>
                <strong>{info.Title}</strong>
            </Typography>
            <Rating
                value={info.Level}
                precision={0.5}
                readOnly
                size={isPrint ? "medium" : "small"}
                max={5}
            />
        </Grid>);
    }

    function regular(){
        return (
            <>
                <Grid item xs={xsValue} sm={8} md={6}>
                <Typography component="legend" variant="subtitle1">
                    <strong>{info.Title}</strong>

                </Typography>
                </Grid>
                <Grid item xs={xsValue} sm md>
                    <Rating
                        name={info.Title}
                        value={info.Level}
                        precision={0.5}
                        readOnly
                        size="small"
                        max={5}
                    />
                </Grid>
                <Hidden smDown={true}>
                    <Grid item sm md lg xl style={{textAlign: "right"}}>
                        <Typography variant="caption">{getLabel()}</Typography>
                    </Grid>
                </Hidden>
            </>);
    }

    return (
        <>
            <Box displayPrint="none" display={"contents"}>
                { specialXs ? inline() : regular()}
            </Box>
            <Box displayPrint={"contents"} display={"none"}>
                { inline() }
            </Box>
        </>
    )
}