import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuItem } from "primeng/api";
import { DataService } from '../data.service'

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router, private dataService: DataService) { }
  items: MenuItem[];
  display: Boolean;

  ngOnInit() {
    this.dataService.displaySidebar.subscribe((displaySidebar) => {
      this.display = displaySidebar;
    });
    this.items = [
      {
        label: "Inquilinos",
        icon: "pi pi-fw pi-user",
        routerLink: ['/inquilinos'],
        routerLinkActiveOptions: { exact: true },
        command: () => this.hideSideBar()
      },
      {
        label: "Facturas",
        icon: "pi pi-fw pi-file",
        routerLink: ['/facturas'],
        routerLinkActiveOptions: { exact: true },
        command: () => this.hideSideBar()
      },
      {
        label: "Gastos",
        icon: "pi pi-fw pi-dollar",
        routerLink: ['/gastos'],
        routerLinkActiveOptions: { exact: true },
        command: () => this.hideSideBar()
      },
      {
        label: "Gráficos",
        icon: "pi pi-fw pi-chart-bar",
        routerLink: ['/graficos'],
        routerLinkActiveOptions: { exact: true },
        command: () => this.hideSideBar()
      },
      {
        label: "Opciones",
        icon: "pi pi-fw pi-cog",
        items: [
          { label: "Abrir", icon: "pi pi-fw pi-folder-open" },
          { label: "Guardar", icon: "pi pi-fw pi-save" },
          { label: "Borrar", icon: "pi pi-fw pi-trash" }
        ]
      }
    ];
  }
  hideSideBar() {
    this.dataService.setDisplaySidebar(false)
  }
}
