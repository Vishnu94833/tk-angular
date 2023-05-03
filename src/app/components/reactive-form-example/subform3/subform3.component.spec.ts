import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subform3Component } from './subform3.component';

describe('Subform3Component', () => {
  let component: Subform3Component;
  let fixture: ComponentFixture<Subform3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subform3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subform3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
