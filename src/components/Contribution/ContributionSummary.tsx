import React from "react";
import {Grid, GridSize, List} from "@material-ui/core";
import ContributionModel from "./Models/ContributionModel";
import ContributionItem from "./ContributionItem";
import Section from "../Misc/Section";

export class ContributionSummaryProps {
    contributions!: Array<ContributionModel> | undefined;
}

export default function ContributionSummary(info: ContributionSummaryProps) {
    const [xs, setXs] = React.useState<GridSize>(12);
    window.addEventListener("beforeprint", ()=>{
        setXs(6);
    });

    window.addEventListener("afterprint", () => {
        setXs(12);
    })

    if (info.contributions === undefined) {
        return <></>
    }

    return (
        <Section
            title="Contributions"
            xs={xs}
            sm={6}
            md={6}
            lg={6}
            xl={6}
        >
            <Grid container item spacing={1} style={{
                display: "contents",
            }}>
            <List style={{padding: 0}}>
                {info.contributions.map((c, i) => {
                    return <ContributionItem
                        key={i}
                        Title={c.Title}
                        Description={c.Description}
                        Contribution={c.Contribution}
                        Link={c.Link}
                        Avatar={c.Avatar}
                        />
                })}
            </List>
        </Grid>
        </Section>
    )
}