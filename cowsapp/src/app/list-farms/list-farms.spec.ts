import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFarms } from './list-farms';

describe('ListFarms', () => {
  let component: ListFarms;
  let fixture: ComponentFixture<ListFarms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFarms]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFarms);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
