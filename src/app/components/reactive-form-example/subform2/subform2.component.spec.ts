import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subform2Component } from './subform2.component';

describe('Subform2Component', () => {
  let component: Subform2Component;
  let fixture: ComponentFixture<Subform2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subform2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
