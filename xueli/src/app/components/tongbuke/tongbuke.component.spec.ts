import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongbukeComponent } from './tongbuke.component';

describe('TongbukeComponent', () => {
  let component: TongbukeComponent;
  let fixture: ComponentFixture<TongbukeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongbukeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongbukeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
