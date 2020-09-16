import {PropertyValue} from './property.value';

export class Developer {
    public uuid: string;
    public username: string;
    public name: string;
    public surname: string;
    public tags: string;
    public companies: string;
    public biography_preview: string;
    public biography: string;
    public lastCompany: string;
    public photo_url: string;
    public birthdate: string;
    public creation_date: string;
    public properties: PropertyValue[];

    public insert_date: string;
    public update_date: string;

    constructor() {
    }
}
