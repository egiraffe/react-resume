import IExperienceRole from "../interfaces/IExperienceRole";

export default class ExperienceRoleModel implements IExperienceRole{
    Title!: string;
    From!: string;
    To!: string;
    Duties = new Array<string>();
    Achievements = new Array<string>();
    Notes!: string;

    constructor(init: Partial<ExperienceRoleModel>) {
        Object.assign(this, init);
    }

    addDuty(duty: string): ExperienceRoleModel {
        this.Duties.push(duty);
        return this;
    }

    addAchievement(achievement: string): ExperienceRoleModel {
        this.Achievements.push(achievement);
        return this;
    }
}