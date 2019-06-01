/* General */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

/* Service */
import { ListsApiService } from '../services/apis/lists-api.service';
import { ListService } from '../services/list.service';
import { ItemsApiService } from '../services/apis/items-api.service';

/* UI */
import { MatBottomSheet } from '@angular/material';
import { ListTitleEditorComponent } from '../list-title-editor/list-title-editor.component';

import { MatDialog } from '@angular/material/dialog';
import { DeleteConfimationDialogComponent } from '../delete-confimation-dialog/delete-confimation-dialog.component';

import { ItemEditorComponent } from '../item-editor/item-editor.component';

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
    private bottomSheet: MatBottomSheet,
    private dialog: MatDialog,
    private itemsApiService: ItemsApiService
  ) { }

  ngOnInit() {
    this.listsApiService.getLists().subscribe(res => {
      this.lists = <listsJSON>res;
    })
  }

  //================= リストのCRUD＋アイテムのR =======================

  /*
   * formから新規リストのタイトルを受け取る
   * バック側でリスト作成後listsを更新
   * lists更新完了後再描画する
   * 注意：かな入力時のEnterで動作しないようにしている
  */
  addList(event) {
    if(event.which === 13) {
      let newListTitle = event.target.value;
      this.listsApiService.createList(newListTitle).subscribe( _ => {
        this.listsApiService.getLists().subscribe(res => {
          this.lists = <listsJSON>res;
        })
        this.changeDetectorRef.detectChanges();
      })
    }
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
    //BUG: キャンセル時にも再描画している
    listTitleEditor.afterDismissed().subscribe( _ => {
      this.listsApiService.getLists().subscribe(res => {
        this.lists = <listsJSON>res;
      })
      this.changeDetectorRef.detectChanges();
    });
  }

  /*
   * List Delete時に確認用のダイアログを開く
   * OKの場合は削除処理を行う
   * 削除処理の後、listsを再描画する
  */
  openConfimationDialog(id, title) {
    let deleteConfimationDialog = this.dialog.open(DeleteConfimationDialogComponent, { width: '320px', data: { id: id, title: title } });

    deleteConfimationDialog.afterClosed().subscribe( _ => {
      this.listsApiService.getLists().subscribe(res => {
        this.lists = <listsJSON>res;
      })
      this.changeDetectorRef.detectChanges();
    });
  }

  //================= アイテムのCUD =======================

  /*
   * formから新規アイテムを受け取る
   * バック側で更新完了後listsを再描画する
  */
  addItem(listId, event) {
    if(event.which === 13) {
      let newItem = event.target.value;
      this.itemsApiService.createItem(listId, newItem).subscribe( _ => {
        this.listsApiService.getLists().subscribe(res => {
          this.lists = <listsJSON>res;
        })
        this.changeDetectorRef.detectChanges();
        //TODO:この辺で通知出したい
      })
    }
  }

  /*
   * 編集用のBottomSheetを開く
   * シート側でitemのbody,stateの変更or削除を行う
   * 処理完了後listsを再描画する
  */
  openItemEditor(event) {
    let id = event.option.value['id'];
    let nowItem = event.option.value['nowItem'];
    let state = event.option.value['state'];

    let itemEditor = this.bottomSheet.open(ItemEditorComponent, { data: { id: id, nowItem: nowItem, state: state } });

    itemEditor.afterDismissed().subscribe( _ => {
      this.listsApiService.getLists().subscribe(res => {
        this.lists = <listsJSON>res;
      })
    })
    this.changeDetectorRef.detectChanges();
    //TODO:この辺で通知出したい
  }
}

