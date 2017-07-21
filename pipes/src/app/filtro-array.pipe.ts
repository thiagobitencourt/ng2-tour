import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value.length || args === undefined) {
      return value;
    }

    let filter = args.toLocaleLowerCase();
    return value.filter(val => val.toLocaleLowerCase().indexOf(filter) !== -1);
  }

}
