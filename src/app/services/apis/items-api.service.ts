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

  updateItem(listId, itemId, body, state) {
    let url = `/items/${listId}/${itemId}`;
    let json = `{ "body" : "${body}", "state" : "${state}" }`;

    return this.http.put(url, JSON.parse(json), httpOptions);
  }

  /* 指定したIDのアイテムを削除 */
  deleteItem(listId, itemId) {
    let url = `/items/${listId}/${itemId}`;

    return this.http.delete(url, httpOptions);
  }
  
  /* 指定したリストに紐づくアイテムを全て削除 */
  deleteItems(listId) {
    let url = `/items/${listId}`;

    return this.http.delete(url, httpOptions);
  }
}
