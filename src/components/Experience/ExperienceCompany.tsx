import {Grid, Typography} from "@material-ui/core";
import React from "react";
import IExperienceCompany from "./interfaces/IExperienceCompany";
import ExperiencePosition from "./ExperiencePosition";

export default function ExperienceCompany(props: IExperienceCompany) {
    return (
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant="h6">{props.CompanyName}</Typography>
            <Typography variant="subtitle2" color="textSecondary">{props.Description}</Typography>
            {   props.Roles !== undefined &&
                props.Roles.map(((pos, index) => {
                    return (

                        <ExperiencePosition key={index}
                                            Title={pos.Title}
                                            From={pos.From}
                                            To={pos.To}
                                            Duties={pos.Duties}
                                            Achievements={pos.Achievements}
                                            Notes={pos.Notes}
                        />)
                }))
            }
        </Grid>
    )
}