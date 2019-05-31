import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfimationDialogComponent } from './delete-confimation-dialog.component';

describe('DeleteConfimationDialogComponent', () => {
  let component: DeleteConfimationDialogComponent;
  let fixture: ComponentFixture<DeleteConfimationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteConfimationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteConfimationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
