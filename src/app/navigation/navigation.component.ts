import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  items: MenuItem[];
  activeIndex: number = 1;

  ngOnInit() {
    this.items = [
      {
        label: "Inquilinos",
        icon: "pi pi-fw pi-user",
        routerLink: ['/inquilinos'],
        command: (event: any) => {
          this.activeIndex = 1;
        }
      },
      {
        label: "Facturas",
        icon: "pi pi-fw pi-file",
        routerLink: ['/facturas'],
        command: (event: any) => {
          this.activeIndex = 2;
        }
      },
      {
        label: "Gastos",
        icon: "pi pi-fw pi-dollar",
        routerLink: ['/gastos'],
        command: (event: any) => {
          this.activeIndex = 3;
        }
      },
      {
        label: "Gráficos",
        icon: "pi pi-fw pi-chart-bar",
        routerLink: ['/graficos'],
        command: (event: any) => {
          this.activeIndex = 4;
        }
      }
    ];
  }

}
