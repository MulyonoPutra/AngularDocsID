import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingNavigationComponent } from './adding-navigation.component';

describe('AddingNavigationComponent', () => {
  let component: AddingNavigationComponent;
  let fixture: ComponentFixture<AddingNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddingNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
