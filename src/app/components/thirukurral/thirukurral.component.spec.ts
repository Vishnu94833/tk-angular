import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirukurralComponent } from './thirukurral.component';

describe('ThirukurralComponent', () => {
  let component: ThirukurralComponent;
  let fixture: ComponentFixture<ThirukurralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirukurralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirukurralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
