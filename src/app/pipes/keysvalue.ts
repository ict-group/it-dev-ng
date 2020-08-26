import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'keysvalue'
})
export class KeysValuePipe implements PipeTransform {

    constructor() {
    }
    transform(value): any {
      const keys = [];
      const keyArr: any[] = Object.keys(value);
      keyArr.forEach(element => {
        keys.push({key: element, value: value[element]});
      });
      return keys;
    }

}
