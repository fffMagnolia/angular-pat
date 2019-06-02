import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDeleteConfimationDialogComponent } from './item-delete-confimation-dialog.component';

describe('ItemDeleteConfimationDialogComponent', () => {
  let component: ItemDeleteConfimationDialogComponent;
  let fixture: ComponentFixture<ItemDeleteConfimationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDeleteConfimationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDeleteConfimationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
