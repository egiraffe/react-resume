import React from "react";
import Proficiency from "./Proficiency";
import ProficiencyModel from "./Models/ProficiencyModel";
import {Grid} from "@material-ui/core";
import Section from "../Misc/Section";

export class TechnologySummaryParameter {
    proficiencies!: Array<ProficiencyModel> | undefined;
    sort?: boolean = false;
}

export default function TechnologySummary(proficiencies: TechnologySummaryParameter) {
    if (proficiencies.proficiencies === undefined){
        return <></>
    }

    const prof = !proficiencies.sort
        ? proficiencies.proficiencies
        : proficiencies.proficiencies
        .sort((a,b) => {
            return a.Level > b.Level
                ? -1
                : a.Level === b.Level && a.Title.toLowerCase() > b.Title.toLowerCase()
                    ? 1
                    : -1;
        });

    return (
        <Section
            title="Technology"
            xs={12}
            sm={6}
            md={6}
            lg={6}
            xl={6}
        >
            <Grid container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                spacing={1}
            >
                {
                    prof.map((p, i) =>
                            <Proficiency
                                Title={p.Title}
                                Level={p.Level}
                                key={i} />
                    )
                }
            </Grid>
        </Section>
    )
}