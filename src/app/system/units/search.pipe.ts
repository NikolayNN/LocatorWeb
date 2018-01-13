import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(unitList, value) {
    return unitList.filter(unit => {
      return unit.name.toLowerCase().includes(value.toLowerCase());
    });
  }
}
