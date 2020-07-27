import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfeliComponent } from './profeli.component';

describe('ProfeliComponent', () => {
  let component: ProfeliComponent;
  let fixture: ComponentFixture<ProfeliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfeliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfeliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
