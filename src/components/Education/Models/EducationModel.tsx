export default class EducationModel {
    Authority!: string;
    Title!: string;
    From!: string
    To!: string

    constructor(init: Partial<EducationModel>) {
        Object.assign(this, init);
    }
}