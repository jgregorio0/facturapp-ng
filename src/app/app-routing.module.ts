import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuestsComponent } from './guests/guests.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { GraphsComponent } from './graphs/graphs.component';

const routes: Routes = [
  { path: "", redirectTo: "/inquilinos", pathMatch: "full" },
  { path: "inquilinos", component: GuestsComponent },
  { path: "facturas", component: InvoicesComponent },
  { path: 'gastos', component: ExpensesComponent },
  { path: 'graficos', component: GraphsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
