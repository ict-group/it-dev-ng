import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'keys'
})
export class KeysPipe implements PipeTransform {

    constructor() {
    }
    transform(value: any): any[] {

        // create instance vars to store keys and final output
        // console.log('getting keys of', value);
        const keyArr: any[] = Object.keys(value);
        // console.log('keys are', keyArr);
        return keyArr;
    }

}
