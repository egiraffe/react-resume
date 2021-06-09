import IExperienceCompany from "../interfaces/IExperienceCompany";
import ExperienceRoleModel from "./ExperienceRoleModel";

export default class ExperienceCompanyModel implements IExperienceCompany{
    CompanyName!: string;
    Description!: string;
    Roles = new Array<ExperienceRoleModel>();

    constructor(init: Partial<ExperienceCompanyModel>) {
        Object.assign(this, init);
    }

    addJob(job: ExperienceRoleModel): ExperienceCompanyModel {
        this.Roles.push(job)
        return this;
    }
}