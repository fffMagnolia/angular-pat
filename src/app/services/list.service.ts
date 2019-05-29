import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  title: string;
  id: number;

  constructor() { }

  /* Title Setter and Getter */
  setTitle(nowTitle) {
    this.title = nowTitle;
  }

  getTitle() {
    return this.title;
  }

  /* List ID Setter and Getter */
  setId(id) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
}
