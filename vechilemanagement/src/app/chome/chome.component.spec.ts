import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChomeComponent } from './chome.component';

describe('ChomeComponent', () => {
  let component: ChomeComponent;
  let fixture: ComponentFixture<ChomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChomeComponent]
    });
    fixture = TestBed.createComponent(ChomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
