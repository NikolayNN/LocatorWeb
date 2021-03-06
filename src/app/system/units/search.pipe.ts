import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(unitList, value) {
    console.log(unitList);
    console.log(value);
    return unitList.filter(unit => {
      return unit.unitName.toLowerCase().includes(value.toLowerCase());
    });
  }
}
