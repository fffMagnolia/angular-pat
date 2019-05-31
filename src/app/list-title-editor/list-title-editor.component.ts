/* General */
import { Component, OnInit } from '@angular/core';

/* UI */
import { MatBottomSheetRef } from '@angular/material';

/* Service */
import { ListService } from '../services/list.service';
import { ListsApiService } from '../services/apis/lists-api.service';

interface listJSON {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
}

@Component({
  selector: 'app-list-title-editor',
  templateUrl: './list-title-editor.component.html',
  styleUrls: ['./list-title-editor.component.css']
})
export class ListTitleEditorComponent implements OnInit {

  /*
   * @nowTitle: フォーム表示
   * @newTitle: update用。データバインディングしている
   * @id: update用
  */
  nowTitle: string;
  newTitle: string;
  id: number;

  constructor(
    private bottomSheetRef: MatBottomSheetRef<ListTitleEditorComponent>,
    private listService: ListService,
    private listsApiService: ListsApiService
  ) { }

  ngOnInit() {
    this.nowTitle = this.listService.getTitle();
    this.id = this.listService.getId();
  }

  /* 
   * send input value at list-api-service
   * @id: target list ID
   * TODO: list modelの更新をしたい
  */
  updateTitle(event) {
    //バック側に飛ばす。view更新用にserviceにも新しいタイトルを渡す
    this.listsApiService.updateListTitle(this.id, this.newTitle)
      .subscribe( _ => {
        //後処理。dismiss後listsに処理を引き継ぐ。
        this.bottomSheetRef.dismiss();
        event.preventDefault();
      });
  }
}
