import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDetailDialogComponent } from './pet-detail-dialog.component';

describe('PetDetailComponent', () => {
  let component: PetDetailDialogComponent;
  let fixture: ComponentFixture<PetDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PetDetailDialogComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
