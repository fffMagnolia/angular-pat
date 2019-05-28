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

  getLists() {
    return this.http.get('/lists');
  }

  //idを元にstateを反転させる(=データ更新)
  //put(endpoint-url, 渡したい値, httpOptions)
  /*
  setItemState(number: id): Observable {
    return this.http.put('/list', id, httpOptions);
  }
  */
}
