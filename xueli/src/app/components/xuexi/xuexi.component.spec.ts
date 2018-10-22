import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XuexiComponent } from './xuexi.component';

describe('XuexiComponent', () => {
  let component: XuexiComponent;
  let fixture: ComponentFixture<XuexiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XuexiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XuexiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
