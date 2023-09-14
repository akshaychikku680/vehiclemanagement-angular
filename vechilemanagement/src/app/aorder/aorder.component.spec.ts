import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AorderComponent } from './aorder.component';

describe('AorderComponent', () => {
  let component: AorderComponent;
  let fixture: ComponentFixture<AorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AorderComponent]
    });
    fixture = TestBed.createComponent(AorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
