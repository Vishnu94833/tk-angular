import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyAllHeaderComponent } from './apply-all-header.component';

describe('ApplyAllHeaderComponent', () => {
  let component: ApplyAllHeaderComponent;
  let fixture: ComponentFixture<ApplyAllHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyAllHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyAllHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
