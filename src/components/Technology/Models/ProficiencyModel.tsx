export default class ProficiencyModel {
    Title!: string;
    Level!: number;

    constructor(title: string, level: number) {
        this.Title = title;
        this.Level = level;
    }
}