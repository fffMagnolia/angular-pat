/* General */
import { Component, OnInit, Inject } from '@angular/core';
/* UI */
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/* Service */
import { ListsApiService } from '../services/apis/lists-api.service';

interface DialogData {
  id: number;
  title: string;
}

@Component({
  selector: 'app-delete-confimation-dialog',
  templateUrl: './delete-confimation-dialog.component.html',
  styleUrls: ['./delete-confimation-dialog.component.css']
})
export class DeleteConfimationDialogComponent implements OnInit {

  constructor(
    private listsApiService: ListsApiService,
    private dialogRef: MatDialogRef<DeleteConfimationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  ngOnInit() {}

  cancel() {
    this.dialogRef.close();
  }

  /*
   * deleteList(id): 指定されたIDのリストを削除する
   * deleteItems(id): 指定されたIDに紐づくアイテムを削除する
  */
  delete(event, id) {
    this.listsApiService.deleteList(id).subscribe( _ => {
      this.dialogRef.close();
      event.preventDefault();
    })
  }
}
