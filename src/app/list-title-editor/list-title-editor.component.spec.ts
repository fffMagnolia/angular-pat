import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTitleEditorComponent } from './list-title-editor.component';

describe('ListTitleEditorComponent', () => {
  let component: ListTitleEditorComponent;
  let fixture: ComponentFixture<ListTitleEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTitleEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTitleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
