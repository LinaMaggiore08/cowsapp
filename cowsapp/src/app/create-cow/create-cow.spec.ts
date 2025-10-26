import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCow  } from './create-cow';

describe('CreateCow', () => {
  let component: CreateCow;
  let fixture: ComponentFixture<CreateCow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
