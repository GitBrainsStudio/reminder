import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../meterial/material.module';
import { ReminderCollectionComponent } from './components/reminder-collection/reminder-collection.component';
import { ReminderViewerComponent } from './components/reminder-viewer/reminder-viewer.component';

@NgModule({
  declarations: [
    ReminderViewerComponent,
    ReminderCollectionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    ReminderViewerComponent,
    ReminderCollectionComponent
  ]
})
export class ReminderModule { }