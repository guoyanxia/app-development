import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinshedComponent } from './finshed.component';

describe('FinshedComponent', () => {
  let component: FinshedComponent;
  let fixture: ComponentFixture<FinshedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinshedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinshedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
