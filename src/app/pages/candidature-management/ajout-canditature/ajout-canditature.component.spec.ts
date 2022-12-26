import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCanditatureComponent } from './ajout-canditature.component';

describe('AjoutCanditatureComponent', () => {
  let component: AjoutCanditatureComponent;
  let fixture: ComponentFixture<AjoutCanditatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCanditatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCanditatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
