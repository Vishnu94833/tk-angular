import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardCertificateErrorPopupComponent } from './reward-certificate-error-popup.component';

describe('RewardCertificateErrorPopupComponent', () => {
  let component: RewardCertificateErrorPopupComponent;
  let fixture: ComponentFixture<RewardCertificateErrorPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardCertificateErrorPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardCertificateErrorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
