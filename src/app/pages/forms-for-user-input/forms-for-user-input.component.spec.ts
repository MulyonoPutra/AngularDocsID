import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsForUserInputComponent } from './forms-for-user-input.component';

describe('FormsForUserInputComponent', () => {
  let component: FormsForUserInputComponent;
  let fixture: ComponentFixture<FormsForUserInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsForUserInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsForUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
