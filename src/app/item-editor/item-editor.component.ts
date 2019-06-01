/* General */
import { Component, OnInit, Inject } from '@angular/core';
/* UI */
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
/* Service */
import { ItemsApiService } from '../services/apis/items-api.service';

interface BottomSheetData {
  id: number;
  nowItem: string;
  state: number;
}

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.css']
})
export class ItemEditorComponent implements OnInit {

  editedItem: string;
  state: boolean;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<ItemEditorComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: BottomSheetData,
    private itemsApiService: ItemsApiService
  ) { }

  ngOnInit() {
    this.editedItem = this.data.nowItem;
    //DBはTINY_INT,Angularはbooleanでstateを管理しているので変換処理を入れる
    if (this.data.state === 0) {
      this.state = false;
    } else {
      this.state = true;
    }
  }

  updateItem() {}
}
