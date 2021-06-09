export default class ContactMethodModel {
    MethodName!: string;
    DisplayText!: string;
    ClipboardText!: string;
    Link!: string;
    Icon!: string;

    public constructor(init?: Partial<ContactMethodModel>) {
        Object.assign(this, init);
    }
}