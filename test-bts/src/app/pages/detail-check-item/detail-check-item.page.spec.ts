import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailCheckItemPage } from './detail-check-item.page';

describe('DetailCheckItemPage', () => {
  let component: DetailCheckItemPage;
  let fixture: ComponentFixture<DetailCheckItemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCheckItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
