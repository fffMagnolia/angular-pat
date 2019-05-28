/* General */
import { Component, OnInit } from '@angular/core';

/* Service */
import { ListsApiService } from '../services/apis/lists-api.service';
import { ListService } from '../services/list.service';

/* UI */
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { ListTitleEditorComponent } from '../list-title-editor/list-title-editor.component';

//応急処置。本当はmodelをangular側で作った方が良い？
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
    private listsApiService: ListsApiService,
    private listService: ListService,
    private bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
    //HttpClient.get()がObservableを返すため、subscribeを呼び出せる
    this.listsApiService.getLists().subscribe(res => {
      this.lists = <listsJSON>res;
    })
  }

  /*
   * ListのTitle編集画面を表示
   * inputに表示させるため現在のtitleをserviceに渡す
  */
  openListTitleEditor(list) {
    let nowTitle = list.title;
    this.listService.setTitle(nowTitle);

    this.bottomSheet.open(ListTitleEditorComponent);
  }
}
