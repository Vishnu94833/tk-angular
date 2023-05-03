import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subform1Component } from './subform1.component';

describe('Subform1Component', () => {
  let component: Subform1Component;
  let fixture: ComponentFixture<Subform1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subform1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
