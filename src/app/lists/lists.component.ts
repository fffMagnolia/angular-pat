/* General */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

/* Service */
import { ListsApiService } from '../services/apis/lists-api.service';
import { ListService } from '../services/list.service';

/* UI */
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { ListTitleEditorComponent } from '../list-title-editor/list-title-editor.component';

interface itemsJSON {
  id: number;
  body: string;
  state: number;
  createdAt: string;
  updatedAt: string;
}

interface listsJSON {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  items: itemsJSON;
}

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css'],
  providers: [ ListsApiService ]
})
export class ListsComponent implements OnInit {
  lists: listsJSON;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private listsApiService: ListsApiService,
    private listService: ListService,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
    this.listsApiService.getLists().subscribe(res => {
      this.lists = <listsJSON>res;
    })
  }

  /*
   * ListのTitle編集画面を表示
   * @nowTitle: 現在のタイトル。inputのplaceholderに表示
   * @id: update対象のリストID。updateに使用
  */
  openListTitleEditor(list) {
    let nowTitle = list.title;
    let id = list.id;

    this.listService.setTitle(nowTitle);
    this.listService.setId(id);

    let listTitleEditor = this.bottomSheet.open(ListTitleEditorComponent);

    //lists更新後、viewを強制的に再描画する
    listTitleEditor.afterDismissed().subscribe( _ => {
      this.listsApiService.getLists().subscribe(res => {
        this.lists = <listsJSON>res;
      })
      this.changeDetectorRef.detectChanges();
    });
  }
}
