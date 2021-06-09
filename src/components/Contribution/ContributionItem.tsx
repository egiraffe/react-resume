import GenerateIcon from "../Misc/GeneratedIconElement";
import React from "react";
import {Avatar, Box, Grid, Link, ListItem, Typography} from "@material-ui/core";
import ContributionModel from "./Models/ContributionModel";


export default function ContributionItem(info: ContributionModel){

    function getAvatar() {
        if (info?.Avatar === undefined){
            return <></>
        }

        if (info.Avatar && info.Avatar.toLowerCase().startsWith("http")){
            return <Avatar alt={info.Title} src={info.Avatar}/>
        } else if (info.Avatar && info.Avatar.length <= 2) {
            return <Avatar alt={info.Title}>{info.Avatar}</Avatar>
        } else if (info.Avatar && info.Avatar.length > 0) {
            return <Avatar alt={info.Title}>{GenerateIcon(info.Avatar)}</Avatar>
        } else {
            return <Avatar alt={info.Title}>{info.Title[0]}</Avatar>
        }
    }

    return (
        <ListItem style={{padding: 0, paddingBottom: "1em"}}>
            <Grid container item xs={12} sm={12} md={12} lg={12} xl={12} spacing={2}>
                <Box displayPrint="none">
                    <Grid item>
                        <Link href={info.Link} target={info.Title} title={info.Title} underline="none">
                            {getAvatar()}
                        </Link>
                    </Grid>
                </Box>
                <Grid item xs sm md lg xl>
                    <Typography variant={"subtitle1"}><strong>{info.Title}</strong></Typography>
                    <Typography variant={"subtitle2"} color="textSecondary">{info.Description}</Typography>
                    <div style={{marginTop:"0.5em"}}>
                        <Typography variant={"caption"}>
                            <strong>Contribution: </strong>
                            {info.Contribution}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </ListItem>
    );
}