import React, {useEffect, useState} from 'react';
import Biography from "./components/Demographics/Biography"
import Experience from "./components/Experience/Experience";
import {
    Container,
    createMuiTheme,
    CssBaseline, Grid,
    MuiThemeProvider,
    unstable_createMuiStrictModeTheme,
    useMediaQuery
} from "@material-ui/core";
import {Helmet, HelmetProvider} from 'react-helmet-async';
import EducationHistory from "./components/Education/EducationHistory";
import TechnologySummary from "./components/Technology/TechnologySummary";
import ContributionSummary from "./components/Contribution/ContributionSummary";
import DataGetter from "./data/DataGetter";
import DataModel from "./data/DataModel";

const createTheme = process.env.NODE_ENV === 'production'
    ? createMuiTheme
    : unstable_createMuiStrictModeTheme;

const dg = new DataGetter("https://gist.githubusercontent.com/egiraffe/" +
                                "942cd79c4bfa3f7a8509dedadfba1a5e" +
                                "/raw");

class appProps {
    loaded: boolean = false;
    dataModel: DataModel = new DataModel();
    constructor(init?: Partial<appProps>) {
        Object.assign(this, init);
    }
}

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = createTheme({
                    palette: {
                        type: prefersDarkMode ? 'dark' : 'light'
                    }
    });

    window.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    }, {passive: false});

    window.addEventListener('mousedown', function(e) {
        e.preventDefault();
    }, {passive: false});

    window.addEventListener('mouseup', function(e) {
        e.preventDefault();
    }, {passive: false});

    const [state, setState] = useState<appProps>(new appProps());
    useEffect(() => {
        dg.Get().then(
                x => {
                    setState(new appProps({
                        dataModel: x,
                        loaded: true,
                    }))
                }
            )
    }, [])

        return (
            !state.loaded ? <></> :
            <HelmetProvider>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Helmet>
                        <title>{`${state.dataModel.Demographics.FirstName} ${state.dataModel.Demographics.LastName} - ${state.dataModel.Demographics.Title}`}</title>
                        <meta
                            name="viewport"
                            content="minimum-scale=1, initial-scale=1, width=device-width"
                        />
                        <link
                            rel="stylesheet"
                            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                        />
                        <link
                            rel="stylesheet"
                            href="https://fonts.googleapis.com/icon?family=Material+Icons"
                        />
                    </Helmet>
                    {
                        (
                            <Container
                                maxWidth="md"
                                style={{
                                    cursor: "default"
                                }}
                            >
                                {/*<WidthDebugger/>*/}
                                <Grid
                                    container item
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="stretch"
                                >
                                    <Biography
                                        info={state.dataModel.Demographics}
                                    />

                                    <Experience
                                        companies={state.dataModel.Experience}
                                    />

                                    <EducationHistory
                                        education={state.dataModel.Education}
                                    />

                                    <TechnologySummary
                                        proficiencies={state.dataModel.Proficiencies}
                                        sort={false}
                                    />

                                    <ContributionSummary
                                        contributions={state.dataModel.Contributions}
                                    />
                                </Grid>
                            </Container>
                        )
                    }
                </MuiThemeProvider>
            </HelmetProvider>
        );
}

export default App;
