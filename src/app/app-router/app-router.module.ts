import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { DataTableComponent } from '../data-table/data-table.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'data-table', component: DataTableComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRouterModule { }
