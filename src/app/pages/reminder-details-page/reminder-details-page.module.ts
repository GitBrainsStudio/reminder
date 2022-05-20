import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReminderDetailsPageComponent } from './reminder-details-page.component';
import { ReminderDetailsPageRoutingModule } from './reminder-details-page-routing.module';
import { ReminderModule } from 'src/app/features/reminder/reminder.module';
import { MaterialModule } from 'src/app/features/material/material.module';

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
