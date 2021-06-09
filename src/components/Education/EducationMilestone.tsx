import React from "react";
import EducationModel from "./Models/EducationModel";
import {Grid, Hidden, makeStyles, Typography} from "@material-ui/core";

export default function EducationMilestone(info: EducationModel){
    const styles = makeStyles(() => ({
        root: {
        },
        duration: {
            textAlign: "right"
        }
    }))();

    function getDateRange() {
        let dr = "";
        const hasFrom = Boolean(info.From && String(info.From).trim().length > 0);
        const hasTo = Boolean(info.To && String(info.To).trim().length > 0);

        if (hasFrom) {
            dr = info?.From ?? "";
        }

        if (hasFrom && hasTo){
            dr += " - ";
        }

        if (hasTo){
            dr += info?.To ?? "";
        }

        return dr;
    }

    return (
        <Grid container>
            <Grid item md={10} sm={10} xs={12}>
                <Typography variant="subtitle1"><strong>{info.Title}</strong></Typography>
            </Grid>
            <Hidden xsDown={true}>
                <Grid item md={2} sm={2}>
                    <Typography variant="subtitle2" className={styles.duration}>{getDateRange()}</Typography>
                </Grid>
            </Hidden>
            <Grid item md={12} xs={8}>
                <Typography variant="body2">{info.Authority}</Typography>
            </Grid>
            <Hidden smUp={true}>
                <Grid item xs={4}>
                    <Typography  variant="body2" className={styles.duration}>{getDateRange()}
                    </Typography>
                </Grid>
            </Hidden>
        </Grid>
    )
}