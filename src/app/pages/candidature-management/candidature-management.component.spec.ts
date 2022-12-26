import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatureManagementComponent } from './candidature-management.component';

describe('CandidatureManagementComponent', () => {
  let component: CandidatureManagementComponent;
  let fixture: ComponentFixture<CandidatureManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatureManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatureManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
