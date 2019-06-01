import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ItemsApiService {

  constructor(private http: HttpClient) { }

  /* 
   * 新規アイテムを作成
  */
  createItem(listId, item) {
    let url = `/items/${listId}`;
    let json = `{ "item": "${item}", "list_id": "${listId}" }`;

    return this.http.post(url, JSON.parse(json), httpOptions);
  }
}
