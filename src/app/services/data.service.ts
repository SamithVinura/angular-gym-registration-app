import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public showHome = new BehaviorSubject<boolean>(true);
  constructor() { }

  showHomeComponent(value: any) {
    this.showHome.next(value);
  }
}
