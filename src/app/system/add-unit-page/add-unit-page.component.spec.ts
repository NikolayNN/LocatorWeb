import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnitPageComponent } from './add-unit-page.component';

describe('AddUnitPageComponent', () => {
  let component: AddUnitPageComponent;
  let fixture: ComponentFixture<AddUnitPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUnitPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUnitPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
