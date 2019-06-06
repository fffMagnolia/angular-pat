/* General */
import { Component, OnInit, Inject } from '@angular/core';

/* UI */
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';

/* Service */
import { ListsApiService } from '../services/apis/lists-api.service';

interface BottomSheetData {
  id: number;
  title: string;
}

@Component({
  selector: 'app-list-title-editor',
  templateUrl: './list-title-editor.component.html',
  styleUrls: ['./list-title-editor.component.css']
})
export class ListTitleEditorComponent implements OnInit {

  /*
   * @newTitle: update用。データバインディングしている
  */
  newTitle: string;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<ListTitleEditorComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: BottomSheetData,
    private listsApiService: ListsApiService
  ) { }

  ngOnInit() {}

  /* 
   * @id: target list ID
  */
  updateTitle(event) {
    //バック側に飛ばす。view更新用にserviceにも新しいタイトルを渡す
    this.listsApiService.updateListTitle(this.data.id, this.newTitle)
      .subscribe( _ => {
        //後処理。dismiss後listsに処理を引き継ぐ。
        this.bottomSheetRef.dismiss();
        event.preventDefault();
      });
  }
}
