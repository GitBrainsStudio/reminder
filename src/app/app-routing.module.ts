import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reminders', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'reminders/:id', loadChildren: () => import('./pages/reminder-details-page/reminder-details-page.module').then(m => m.ReminderDetailsPageModule)
  },
  {
    path: '**', redirectTo: 'reminders'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }