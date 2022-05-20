import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { ReminderModule } from 'src/app/features/reminder/reminder.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ReminderModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomePageModule { }
