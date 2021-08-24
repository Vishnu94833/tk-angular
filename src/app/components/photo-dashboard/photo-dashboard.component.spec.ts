import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoDashboardComponent } from './photo-dashboard.component';

describe('PhotoDashboardComponent', () => {
  let component: PhotoDashboardComponent;
  let fixture: ComponentFixture<PhotoDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
