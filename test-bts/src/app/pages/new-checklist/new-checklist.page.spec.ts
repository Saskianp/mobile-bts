import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewChecklistPage } from './new-checklist.page';

describe('NewChecklistPage', () => {
  let component: NewChecklistPage;
  let fixture: ComponentFixture<NewChecklistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChecklistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
