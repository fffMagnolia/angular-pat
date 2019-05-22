import { Component } from '@angular/core';
//import { ListsApiService } from './services/apis/lists-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pat';
  //TODO: 動作確認後Interfaceに差し替える
  //lists: any;

  //constructor(private listsApiService: ListsApiService) {}

  /*
  ngOnInit() {
    this.listsApiService.getLists().subscribe(res => {
      this.lists = res['lists'];
      console.log(this.lists);
    })
  }
  */
}
