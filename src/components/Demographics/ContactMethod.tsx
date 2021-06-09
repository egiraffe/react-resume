import React from "react";
import {Box, ButtonBase, Grid, Popover, Snackbar, Typography} from "@material-ui/core";
import GenerateIcon from "../Misc/GeneratedIconElement";
import ContactMethodModel from "./Models/ContactMethodModel";

export default function ContactMethod(info: ContactMethodModel) {
    const [eventTimer, setEventTimer] = React.useState<NodeJS.Timeout | null>(null);
    const [showFull, setShowFull] = React.useState(false);
    const [snackType, setSnackType] = React.useState<string | null>(null)
    const [anchorEl, setAnchorEl] = React.useState<Element | null>(null);

    let openSnack = Boolean(snackType !== null);

    const handleTrigger = (event: any) => {
        event.preventDefault();

        // copy local so we can do checks on og value
        const show = showFull;

        // every click should reset timer
        if (eventTimer) {
            clearTimeout(eventTimer);
            setEventTimer(null);
            setShowFull(false);
            setAnchorEl(null);
        }

        // our work is done here, leaving doesn't nav
        // and leaving will have already hidden the text
        if (event.type === "pointerleave"){
            return;
        }

        const triggered = Boolean(event && (
            event.type === "mousedown" ||
            event.type === "pointerdown"));

        if (triggered && !show) {
            // set timer if triggering event
            // and we're not already showing the thing
            setEventTimer(setTimeout(() => {
                setAnchorEl(event.currentTarget ?? event.target);
                setShowFull(true);
                if(window.isSecureContext){
                    navigator.clipboard.writeText(info.ClipboardText)
                        .then(function() {
                            setSnackType("success");
                        }, function() {
                            setSnackType("warning");
                        });
                } else {
                    setSnackType("warning");
                }


            }, 333));
        } else if (!triggered && !show) {
            // if we're an anti-trigger and we're not showing
            // we must be ready to navigate
            window.open(info.Link, info.MethodName);
        }
    }

    return (
        <>
            <Box displayPrint="none">
                <Grid item
                      style={{
                          cursor:"pointer",
                          userSelect:"none",
                          msUserSelect:"none"
                      }}
                >
                    <Grid
                        container
                        spacing={1}
                        alignContent="center"
                        justify="center"
                        onMouseDown={handleTrigger}
                        onMouseUp={handleTrigger}
                        onPointerDown={handleTrigger}
                        onPointerUp={handleTrigger}
                        onPointerLeave={handleTrigger}>
                        <Grid item style={{
                            display: "flex",
                            alignItems: "center",
                            flexWrap: "wrap"
                        }}>
                            <ButtonBase>{GenerateIcon(info.Icon)}</ButtonBase>

                            <Popover
                                open={showFull}
                                anchorEl={anchorEl}
                                transformOrigin={{
                                    vertical: 50,
                                    horizontal: 0
                                }}
                            >
                                <Typography
                                    variant="overline"
                                    style={{
                                        margin: "1em",
                                        cursor: "pointer"
                                    }}
                                >
                                    {info.DisplayText}
                                </Typography>
                            </Popover>

                        </Grid>
                    </Grid>
                    <Snackbar
                        anchorOrigin={{vertical: "top", horizontal: "center"}}
                        open={openSnack}
                        message={(snackType === "success" && openSnack
                            ? "Contact information copied to clipboard."
                            : snackType === "warning" && openSnack
                                ? "Unable to copy contact information to clipboard."
                                : null)}
                        key={info.MethodName}
                        autoHideDuration={600}
                        onClose={() => {
                            setTimeout(() => setSnackType(null), 600)
                        }}
                    />
                </Grid>
            </Box>
            <Box display="none" displayPrint="block">
                <Grid container item style={{paddingRight: "1.0em"}}>
                    <Grid item style={{paddingRight: "0.25em"}}>
                    {GenerateIcon(info.Icon)}
                    </Grid>
                    <Grid item style={{paddingRight: "1.0em"}}>
                        <Typography>{info.DisplayText}</Typography>
                    </Grid>
                </Grid>

            </Box>
        </>
    );
}