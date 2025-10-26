import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCow } from './display-cow';

describe('DisplayCow', () => {
  let component: DisplayCow;
  let fixture: ComponentFixture<DisplayCow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayCow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
