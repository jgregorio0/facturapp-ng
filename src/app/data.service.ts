import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private displaySidebarSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  displaySidebar = this.displaySidebarSubject.asObservable();

  setDisplaySidebar = (value: boolean) => {
    this.displaySidebarSubject.next(value);
  }
}
