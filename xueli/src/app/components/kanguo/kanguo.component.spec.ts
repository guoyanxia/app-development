import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanguoComponent } from './kanguo.component';

describe('KanguoComponent', () => {
  let component: KanguoComponent;
  let fixture: ComponentFixture<KanguoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanguoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanguoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
