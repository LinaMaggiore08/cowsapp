import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCow } from './edit-cow';

describe('EditCow', () => {
  let component: EditCow;
  let fixture: ComponentFixture<EditCow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
