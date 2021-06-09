import BiographyModel from "../components/Demographics/Models/BiographyModel";
import IExperienceCompany from "../components/Experience/interfaces/IExperienceCompany";
import EducationModel from "../components/Education/Models/EducationModel";
import ProficiencyModel from "../components/Technology/Models/ProficiencyModel";
import ContributionModel from "../components/Contribution/Models/ContributionModel";
import ExperienceCompanyModel from "../components/Experience/Models/ExperienceCompanyModel";
import ContactMethodModel from "../components/Demographics/Models/ContactMethodModel";

export default class DataModel {
    Demographics: BiographyModel = new BiographyModel({
        Contact: new Array<ContactMethodModel>(0)
    });
    Experience: IExperienceCompany[] = new Array<ExperienceCompanyModel>(0);
    Education: EducationModel[] = new Array<EducationModel>(0);
    Proficiencies: ProficiencyModel[] = new Array<ProficiencyModel>(0);
    Contributions: ContributionModel[] = new Array<ContributionModel>(0);

    constructor(obj?: any) {
        Object.assign(this, obj);
    }
}