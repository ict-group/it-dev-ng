import {PipeTransform, Pipe} from '@angular/core';
import * as moment from 'moment/moment';

@Pipe({
  name: 'printable'
})
export class OutputPrintable implements PipeTransform {

  constructor() {
  }

  transform(value) {
    console.log(value);
    if (value === undefined || value == null || value === '') {
      return '';
    } else {

      const valueString = '' + value;

      // metodo:1
      // if (value instanceof Date){
      //   return this.formatDateTime(valueString);
      // }

      // metodo:2
      if (valueString.endsWith(' (Central European Standard Time)') || valueString.endsWith(' (Ora standard dell’Europa centrale)')) {
        return this.formatDateTime(value);
      }
      return valueString;
    }
  }


  private formatDateTime(value: string, showTime?: boolean): string {
    if (value) {
      try {
        let val: string = null;
        if (typeof value === 'string') {
          val = value;
        } else if (typeof value === 'number') {
          val = moment(value).format('YYYY-MM-DD[T]HH:mm:ss');
        } else {
          return moment(value).format('DD/MM/YYYY');
        }
        const p: string[] = val.split('T');
        if (p.length !== 2) {
          return null;
        }

        const c: string[] = p[0].split('-');
        if (c.length !== 3) {
          return null;
        }
        const t: string[] = p[1].split(':');
        if (t.length !== 3) {
          return null;
        }
        if (showTime === true) {
          return this.composeDate(c[0], c[1], c[2]) + ' ' + t[0] + ':' + t[1];
        }
        return this.composeDate(c[0], c[1], c[2]);
      } catch (e) {
        console.log(e);
      }
    }
    return null;
  }

  private composeDate(year: string, month: string, day: string): string {
    return day + '/' + month + '/' + year;
  }

}
