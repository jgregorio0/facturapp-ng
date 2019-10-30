import { Component, OnInit } from '@angular/core';
import { Guest } from '../guest';

@Component({
  selector: 'app-guests-form',
  templateUrl: './guests-form.component.html',
  styleUrls: ['./guests-form.component.css']
})
export class GuestsFormComponent implements OnInit {

  constructor() { }

  guest = new Guest(0, '', new Date().toISOString().split('T')[0], new Date().toISOString().split('T')[0])//TODO: el indice es el length de los guests
  es: any;

  ngOnInit() {
    this.es = {
      firstDayOfWeek: 1,
      dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
      dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
      dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
      monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
      monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
      today: 'Hoy',
      clear: 'Borrar'
    }
  }

  onSubmit() { console.log(this.diagnostic()) }

  // TODO: Remove this when we're done
  diagnostic() { return JSON.stringify(this.guest); }

}
