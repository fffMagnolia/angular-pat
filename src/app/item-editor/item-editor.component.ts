/* General */
import { Component, OnInit, Inject } from '@angular/core';

/* UI */
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';

import { ItemDeleteConfimationDialogComponent } from '../item-delete-confimation-dialog/item-delete-confimation-dialog.component';

/* Service */
import { ItemsApiService } from '../services/apis/items-api.service';

interface BottomSheetData {
  listId: number;
  itemId: number;
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
    private itemsApiService: ItemsApiService,
    private dialog: MatDialog
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

  updateItem(event) {
    //Angularのstateはbooleanなので変換処理を入れる
    let nowState: number = this.state === false? 0 : 1;

    this.itemsApiService.updateItem(this.data.listId, this.data.itemId, this.editedItem, nowState)
      .subscribe( _ => {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
      })
  }

  deleteItem(event) {
    let deleteConfimationDialog = this.dialog.open(ItemDeleteConfimationDialogComponent, { width: '320px', data: { listId: this.data.listId, itemId: this.data.itemId, nowItem: this.data.nowItem } });

    deleteConfimationDialog.afterClosed().subscribe( _ => {
      this.bottomSheetRef.dismiss();
      event.preventDefault();
    })
  }
}
