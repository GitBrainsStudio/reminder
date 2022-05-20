import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReminderDetailsPageComponent } from './reminder-details-page.component';

const routes: Routes = [
  {
    path: '', component: ReminderDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReminderDetailsPageRoutingModule { }
