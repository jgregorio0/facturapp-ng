import { Component, OnInit } from '@angular/core';
import { GuestsService } from '../guests.service';
import { Guest } from '../guest'
import { SortEvent } from 'primeng/primeng'
import { GUESTS } from "../mock.guests";

@Component({
  selector: 'app-guests-table',
  templateUrl: './guests-table.component.html',
  styleUrls: ['./guests-table.component.css']
})
export class GuestsTableComponent implements OnInit {

  guests: Guest[];

  cols: any[];

  constructor(private guestsService: GuestsService) { }

  ngOnInit() {
    this.initGuests();
    this.cols = [
      { field: 'name', header: 'Nombre' },
      { field: 'from', header: 'Desde' },
      { field: 'to', header: 'Hasta' }
    ];
  }

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null)
        result = -1;
      else if (value1 != null && value2 == null)
        result = 1;
      else if (value1 == null && value2 == null)
        result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string')
        result = value1.localeCompare(value2);
      else
        result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

      return (event.order * result);
    });
  }

  initGuests(): void {
    this.guestsService.getGuests()
      .subscribe(guests => this.guests = guests);
  }

}
