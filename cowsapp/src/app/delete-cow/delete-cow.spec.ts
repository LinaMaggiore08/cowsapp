import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCow } from './delete-cow';

describe('DeleteCow', () => {
  let component: DeleteCow;
  let fixture: ComponentFixture<DeleteCow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteCow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
