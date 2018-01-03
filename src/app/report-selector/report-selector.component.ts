import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-report-selector',
  templateUrl: './report-selector.component.html',
  styleUrls: ['./report-selector.component.scss']
})
export class ReportSelectorComponent implements OnInit {

  @Input() formDate = {};

  constructor() { }

  ngOnInit() {
  }

}
