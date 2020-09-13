import {PropertyValue} from './property.value';

export class Project {
    public uuid: string;
    public name: string;
    public description: string;
    public tags: string;
    public properties: PropertyValue[];

    constructor() {
    }
}
