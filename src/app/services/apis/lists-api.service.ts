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
export class ListsApiService {

  constructor(private http: HttpClient) { }

  /* 一覧を返す */
  getLists() {
    return this.http.get('/lists');
  }

  /* 指定されたListのtitleをupdate*/
  updateListTitle(id: number, title: string) {
    let url = `/lists/${id}`;
    let jsonTitle = `{ "title": "${title}" }`;
    return this.http.put(url, JSON.parse(jsonTitle), httpOptions);
  }
}
