import React from "react";
import {Avatar, Box, Divider, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import BiographyModel from "./Models/BiographyModel";
import ContactMethod from "./ContactMethod";
import Section from "../Misc/Section";
import {useTheme} from "@material-ui/core";

export class BiographyInfo {
    info!: BiographyModel;
}

export default function Biography(props: BiographyInfo){
    const theme = useTheme();
    const styles = makeStyles((theme) => ({
        large: {
            width: theme.spacing(15),
            height: theme.spacing(15),
            margin: "auto",
            marginTop: "-50px"
        },
        name: {
            textAlign: "center",
            textTransform: "uppercase",
        },
        blurb: {
            padding: "1em",
            fontStyle: "italic",
            fontSize: "smaller",
            textAlign: "center"
        },
        contact: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            }
        }
    }))();

    function getFullName():string {
        return `${props.info.FirstName} ${props.info.MiddleName}`.trim() +
               ` ${props.info.LastName}`
    }

    return (
        <>
            <Box style={{paddingTop: "35px"}} displayPrint="none">
                <Section>
                    <Grid
                        container
                        justify="center"
                    >
                        <Grid
                            item
                            xs={12}
                        >
                            <Avatar
                                alt={getFullName()}
                                src={props.info.PhotoUrl}
                                className={styles.large}/>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            className={styles.name}
                        >
                            <Typography
                                variant="h3"
                            >{getFullName()}</Typography>
                        </Grid>
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignContent="center"
                            className={styles.contact}
                        >
                            {  Array.isArray(props.info.Contact) &&
                                props.info.Contact.map((contact, index) => {
                                return (
                                    <ContactMethod
                                        key={index.toString()}
                                        Link={contact.Link}
                                        MethodName={contact.MethodName}
                                        DisplayText={contact.DisplayText}
                                        Icon={contact.Icon}
                                        ClipboardText={contact.ClipboardText}
                                        />
                                );
                            })}
                        </Grid>
                        <Grid
                            item
                            className={styles.blurb}
                        >
                            <Typography>{props.info.Blurb}</Typography>
                        </Grid>
                    </Grid>
                </Section>
            </Box>
            <Box
                 id="me"
                 display="none"
                 displayPrint="block"
            >
                <Grid container>
                    <Grid item xs={12} md={12}>
                        <Typography
                            variant="h3"
                            style={{color: theme.palette.info.dark}}>
                            {getFullName().toUpperCase()}
                        </Typography>
                    </Grid>
                    <Grid container item xs={12} md={12}>
                        {   Array.isArray(props.info.Contact) &&
                            props.info.Contact.map((contact, index) => {
                            return (
                                <ContactMethod
                                    key={index.toString()}
                                    Link={contact.Link}
                                    MethodName={contact.MethodName}
                                    DisplayText={contact.DisplayText}
                                    Icon={contact.Icon}
                                    ClipboardText={contact.ClipboardText}
                                />
                            );
                        })}
                    </Grid>
                </Grid>
                <Divider/>
            </Box>
        </>
    );
}