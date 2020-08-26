import {PipeTransform, Pipe} from '@angular/core';
import * as moment from 'moment/moment';

@Pipe({
  name: 'outputdatetime'
})
export class OutputDateTimePipe implements PipeTransform {

  constructor() {
  }

  transform(value: string, showTime: boolean) {
    if (value === undefined || value == null || value === '') {
      return null;
    } else {
      let st = true;
      if (showTime === false) {
        st = false;
      }
      return this.formatDateTime(value, st);
    }
  }

  // [2020,3,23,11,19,30,187000000]
  private formatDateTime(value: string, showTime: boolean): string {
    if (value) {
      try {
        let val: string = null;
        if (typeof value === 'string') {
          val = value;
          // } else if (typeof value === "Date") {
          //     return moment(value).format('DD/MM/YYYY');
        } else if (typeof value === 'number') {
          val = moment(value).format('YYYY-MM-DD[T]HH:mm:ss');
        } else {
          val = value;
        }

        const c: string[] = value.toString().split(',');
        if (c.length !== 7) {
          return null;
        }

        if (showTime === true) {
          return this.composeDate(this.n(c[0]), this.n(c[1]), this.n(c[2])) + ' ' + this.n(c[3]) + ':' + this.n(c[4]);
        }
        return this.composeDate(c[0], c[1], c[2]);
      } catch (e) {
        console.log(e);
      }
    }
    return null;
  }

  private n(n) {
    return n > 9 ? '' + n : '0' + n;
  }

  private composeDate(year: string, month: string, day: string): string {
    return day + '/' + month + '/' + year;
  }
}
