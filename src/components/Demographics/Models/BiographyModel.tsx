import ContactMethodModel from "./ContactMethodModel";

export default class BiographyModel {
    FirstName!: string;
    MiddleName!: string;
    LastName!: string;
    Title!: string;
    Blurb!: string;
    PhotoUrl!: string;
    Contact: ContactMethodModel[] = new Array<ContactMethodModel>(0);

    public constructor(init?: Partial<BiographyModel>) {
        Object.assign(this, init);
    }
}