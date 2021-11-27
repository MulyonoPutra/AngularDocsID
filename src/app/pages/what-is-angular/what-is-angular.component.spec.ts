import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsAngularComponent } from './what-is-angular.component';

describe('WhatIsAngularComponent', () => {
  let component: WhatIsAngularComponent;
  let fixture: ComponentFixture<WhatIsAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatIsAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
