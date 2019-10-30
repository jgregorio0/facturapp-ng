import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Guest } from './guest'
import { GUESTS } from './mock.guests'

@Injectable({
  providedIn: 'root'
})
export class GuestsService {

  constructor() { }

  getGuests(): Observable<Guest[]> {
    return of(GUESTS);
  }
}
