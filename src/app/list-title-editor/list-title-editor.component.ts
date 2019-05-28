/* General */
import { Component, OnInit } from '@angular/core';

/* UI */
import { MatBottomSheetRef } from '@angular/material';

/* Service */
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-list-title-editor',
  templateUrl: './list-title-editor.component.html',
  styleUrls: ['./list-title-editor.component.css']
})
export class ListTitleEditorComponent implements OnInit {

  nowTitle: string;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<ListTitleEditorComponent>,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.nowTitle = this.listService.getTitle();
  }
}
