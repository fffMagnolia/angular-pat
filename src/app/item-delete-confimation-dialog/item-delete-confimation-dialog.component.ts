/* General */
import { Component, OnInit, Inject } from '@angular/core';
/* UI */
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/* Service*/
import { ItemsApiService } from '../services/apis/items-api.service';

interface DialogData {
  listId: number;
  itemId: number;
  nowItem: string;
}

@Component({
  selector: 'app-item-delete-confimation-dialog',
  templateUrl: './item-delete-confimation-dialog.component.html',
  styleUrls: ['./item-delete-confimation-dialog.component.css']
})
export class ItemDeleteConfimationDialogComponent implements OnInit {

  constructor(
    private itemsApiService: ItemsApiService,
    private dialogRef: MatDialogRef<ItemDeleteConfimationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {}

  cancel() {
    this.dialogRef.close();
  }

  delete(event) {
    this.itemsApiService.deleteItem(this.data.listId, this.data.itemId).subscribe( _ => {
      this.dialogRef.close();
      event.preventDefault();
    })
  }
}
