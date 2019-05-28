import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  title: string;

  constructor() { }

  setTitle(nowTitle) {
    this.title = nowTitle;
  }

  getTitle() {
    return this.title;
  }
}
