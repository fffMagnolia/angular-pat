import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListsApiService {

  constructor(private http: HttpClient) { }

  getLists() {
    return this.http.get('/lists');
  }
}
