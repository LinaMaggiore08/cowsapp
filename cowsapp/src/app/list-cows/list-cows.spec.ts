import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCows } from './list-cows';

describe('ListCows', () => {
  let component: ListCows;
  let fixture: ComponentFixture<ListCows>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCows]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCows);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
