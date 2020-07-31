import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroExamenesComponent } from './registro-examenes.component';

describe('RegistroExamenesComponent', () => {
  let component: RegistroExamenesComponent;
  let fixture: ComponentFixture<RegistroExamenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroExamenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroExamenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
