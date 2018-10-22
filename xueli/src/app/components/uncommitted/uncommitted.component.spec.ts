import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncommittedComponent } from './uncommitted.component';

describe('UncommittedComponent', () => {
  let component: UncommittedComponent;
  let fixture: ComponentFixture<UncommittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncommittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncommittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
