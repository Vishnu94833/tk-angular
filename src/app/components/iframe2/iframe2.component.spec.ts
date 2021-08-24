import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iframe2Component } from './iframe2.component';

describe('Iframe2Component', () => {
  let component: Iframe2Component;
  let fixture: ComponentFixture<Iframe2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Iframe2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Iframe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
