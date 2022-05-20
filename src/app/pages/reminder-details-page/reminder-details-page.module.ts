import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderDetailsPageComponent } from './reminder-details-page.component';
import { ReminderDetailsPageRoutingModule } from './reminder-details-page-routing.module';
import { ReminderModule } from '../../features/reminder/reminder.module';
import { MaterialModule } from '../../features/material/material.module';

@NgModule({
  declarations: [
    ReminderDetailsPageComponent
  ],
  imports: [
    CommonModule,
    ReminderDetailsPageRoutingModule,
    ReminderModule,
    MaterialModule
  ],
  exports: [
    ReminderDetailsPageComponent
  ]
})
export class ReminderDetailsPageModule { }