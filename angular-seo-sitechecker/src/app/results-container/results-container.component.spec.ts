import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsContainer } from './results-container.component';

describe('ResultsContainerComponent', () => {
  let component: ResultsContainer;
  let fixture: ComponentFixture<ResultsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(ResultsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
