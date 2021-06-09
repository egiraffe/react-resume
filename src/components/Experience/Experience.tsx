import React from "react"
import IExperienceCompany from "./interfaces/IExperienceCompany";
import ExperienceCompany from "./ExperienceCompany";
import Section from "../Misc/Section";

export class ExperienceModel {
    companies!: Array<IExperienceCompany> | undefined
}

export default function Experience(history: ExperienceModel) {
    if (history.companies === undefined){
        return <></>
    }

    return (
            <Section
                title="Experience"
                xs={12} sm={12} md={12} lg={12} xl={12}
            >
                {history.companies.map((company, index) => {
                        return (
                            <ExperienceCompany
                            key={index}
                            Description={company.Description}
                            CompanyName={company.CompanyName}
                            Roles={company.Roles}/>
                        )}
                )}
            </Section>
    );
}