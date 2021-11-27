import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployingApplicationsComponent } from './deploying-applications.component';

describe('DeployingApplicationsComponent', () => {
  let component: DeployingApplicationsComponent;
  let fixture: ComponentFixture<DeployingApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeployingApplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeployingApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
