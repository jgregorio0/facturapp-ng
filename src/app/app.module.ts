import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from '@angular/forms';

import { SidebarModule } from 'primeng/sidebar';
import { TieredMenuModule } from "primeng/tieredmenu";
import { MenubarModule } from 'primeng/menubar';
import { AccordionModule } from 'primeng/accordion';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GuestsComponent } from './guests/guests.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { GraphsComponent } from './graphs/graphs.component';
import { MenubarComponent } from './menubar/menubar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GuestsFormComponent } from './guests-form/guests-form.component';
import { GuestsTableComponent } from './guests-table/guests-table.component';


@NgModule({
  declarations: [AppComponent, SidebarComponent, GuestsComponent, InvoicesComponent, ExpensesComponent, GraphsComponent, MenubarComponent, NavigationComponent, GuestsFormComponent, GuestsTableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    SidebarModule,
    TieredMenuModule,
    MenubarModule,
    AccordionModule,
    CalendarModule,
    ButtonModule,
    TableModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
