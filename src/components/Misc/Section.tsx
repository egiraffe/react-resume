import React from "react";
import {Box, Container, ContainerProps, Grid, GridSize, makeStyles, Paper, Typography} from "@material-ui/core";
import {useTheme} from "@material-ui/core";

export class SectionProps {
    title?: string;
    xs?: GridSize;
    sm?: GridSize;
    md?: GridSize;
    lg?: GridSize;
    xl?: GridSize;
}

export default function Section(props: SectionProps & React.PropsWithChildren<ContainerProps>) {
    const theme = useTheme();
    const styles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            overflow: 'hidden',
        },
        padded100: {
            padding: `${theme.spacing(1)}px`,
            height: "100%"
        }
    }))();

    return (
        <Grid item
              xs={props.xs || "auto"}
              sm={props.sm || "auto"}
              md={props.md || "auto"}
              lg={props.lg || "auto"}
              xl={props.xl || "auto"}
        >
            <Box displayPrint="none" className={styles.padded100}>
                <Paper className={styles.padded100}>
                    {(props.title) &&
                        <Typography
                            variant="h4"
                            style={{
                                flexGrow: 1,
                                paddingBottom: "0.25em"
                            }}
                        >
                            {props.title}
                        </Typography>
                    }
                    <Container>{props.children}</Container>
                </Paper>
            </Box>
            <Box
                display="none"
                displayPrint="block"
            >
                    <Box pl="1em">
                        <Typography
                            variant="h4"
                            style={{
                                color: theme.palette.info.dark,
                                paddingBottom: "0.25em"
                            }}
                        >
                        {props.title}
                        </Typography>
                        <Container>
                            {props.children}
                        </Container>
                    </Box>
            </Box>
        </Grid>
    )
};