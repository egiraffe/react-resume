export default class ContributionModel {
    Title!: string;
    Description!: string;
    Link!: string;
    Avatar?: string;
    Contribution!: string;

    constructor(title: string, description: string, contribution: string, href: string, avatar?: string) {
        this.Title = title;
        this.Description = description;
        this.Contribution = contribution;
        this.Link = href;
        this.Avatar = avatar;
    }
}