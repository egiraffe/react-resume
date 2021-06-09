import {Box, Grid, makeStyles, Typography} from "@material-ui/core";
import React from "react";
import IExperienceRole from "./interfaces/IExperienceRole";

export default function ExperiencePosition(props: IExperienceRole) {
    const styles = makeStyles((theme) => ({
        root: {
        },
        duration: {
            textAlign: "right",
            [theme.breakpoints.down('xs')]: {
                textAlign: "left",
                //fontSize: "smaller",
            }
        }
    }))();

    const listItems = new Array<string>();

    if (Array.isArray(props.Duties)){
        listItems.push(...props.Duties);
    }
    if (Array.isArray(props.Achievements)){
        listItems.push(...props.Achievements);
    }

    return (
        <><div>
            <Grid item container xs={12} sm={12} md={12} lg={12} xl={12} >
                <Box displayPrint="none" display="contents" style={{width: "100%"}}>
                    <Grid item md={8} sm={6} xs={12}>
                        <Typography variant="subtitle1"><strong>{props.Title}</strong></Typography>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Typography variant="subtitle2" className={styles.duration}>{props.From} - {props.To}</Typography>
                    </Grid>
                </Box>
                <Box displayPrint="contents" display="none">
                    <Grid item xs={6}>
                            <Typography variant="subtitle1">
                                <strong>{props.Title}</strong>
                            </Typography>
                    </Grid>
                    <Grid item xs={6}>
                            <Typography variant="subtitle2" style={{textAlign:"right"}}>
                                {props.From} - {props.To}
                            </Typography>
                    </Grid>
                </Box>
            </Grid>
            {
                props?.Notes?.trim()?.length > 0 &&
                <Grid item sm={12} xs={12} >
                    <Typography variant="subtitle2" style={{fontSize: "smaller"}}>
                        {props.Notes}
                    </Typography>
                </Grid>
            }
            { listItems && listItems.length > 0 &&
            <Grid item xs={12}>
                <Typography
                    variant="body2">
                <ul style={{marginTop: "0.25em", marginBottom: "0.5em"}}
                >
                    {listItems.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
                </Typography>
            </Grid>
            }
        </div></>
    )
}