import {Component} from '@angular/core';
import {UnitsService} from './units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UnitsService]
})
export class AppComponent {

}
