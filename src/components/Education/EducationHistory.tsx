import React from "react";
import EducationModel from "./Models/EducationModel";
import EducationMilestone from "./EducationMilestone";
import Section from "../Misc/Section";


class EducationHistoryModel {
    education!: Array<EducationModel> | undefined
}

export default function EducationHistory(education: EducationHistoryModel) {
    if (education.education === undefined){
        return <></>
    }

    return (
        <Section
            title="Education"
            xs={12} sm={12} md={12} lg={12} xl={12}
        >
            {education.education.map((edu, index) => {
                return (<EducationMilestone
                    key={index}
                    Authority={edu.Authority}
                    From={edu.From}
                    To={edu.To}
                    Title={edu.Title}
                />)
            })}
        </Section>
    );
}