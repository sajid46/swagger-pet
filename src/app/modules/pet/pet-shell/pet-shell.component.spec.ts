import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetShellComponent } from './pet-shell.component';

describe('PetShellComponent', () => {
  let component: PetShellComponent;
  let fixture: ComponentFixture<PetShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
