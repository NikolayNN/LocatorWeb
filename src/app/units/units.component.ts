import {Component} from '@angular/core';
import {UnitsService} from '../units.service';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent {
  unitList = [];

  constructor(private  unitsService: UnitsService) {}

  onClickAddUnit(){
    console.log('click');
  }

  ngOnInit() {
    this.unitsService.getUnits().subscribe(units => {
      this.unitList = units;
    });
  }
}
