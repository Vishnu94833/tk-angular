import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRewardCertificateComponent } from './add-reward-certificate.component';

describe('AddRewardCertificateComponent', () => {
  let component: AddRewardCertificateComponent;
  let fixture: ComponentFixture<AddRewardCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRewardCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRewardCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
