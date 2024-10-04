import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewChecklistItemPage } from './new-checklist-item.page';

describe('NewChecklistItemPage', () => {
  let component: NewChecklistItemPage;
  let fixture: ComponentFixture<NewChecklistItemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChecklistItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
