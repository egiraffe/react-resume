import IExperienceRole from "./IExperienceRole";

export default interface IExperienceCompany {
    CompanyName: string;
    Description: string;
    Roles: Array<IExperienceRole>;
}