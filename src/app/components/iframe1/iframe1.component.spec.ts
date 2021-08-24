import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iframe1Component } from './iframe1.component';

describe('Iframe1Component', () => {
  let component: Iframe1Component;
  let fixture: ComponentFixture<Iframe1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iframe1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iframe1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
