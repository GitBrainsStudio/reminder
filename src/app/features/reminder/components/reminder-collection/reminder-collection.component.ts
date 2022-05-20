import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { interval, ReplaySubject, switchMap, takeUntil, tap } from 'rxjs';
import { matTableRowAnimation } from 'src/app/features/material/animations/mat-table-row.animation';
import { Reminder } from 'src/app/features/reminder/models/reminder.model';
import { ReminderService } from 'src/app/features/reminder/services/reminder.service';

@Component({
  selector: 'app-reminder-collection',
  templateUrl: './reminder-collection.component.html',
  styleUrls: ['./reminder-collection.component.scss'],
  animations: [matTableRowAnimation]
})
export class ReminderCollectionComponent implements OnInit, OnDestroy {

  @ViewChild(MatTable) remindersMatTable : MatTable<Reminder> | null = null;
  @ViewChild('remindersMatTableWrapper') remindersMatTableWrapper: ElementRef | null = null;
  remindersMatTableColumns: string[] = ['status', 'shortDescription', 'createdAt', 'executedAt'];
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(public reminderService:ReminderService) {
  }

  ngOnInit(): void {
    interval(2000).pipe(
      switchMap(() => this.reminderService.generate())).pipe(
        takeUntil(this.destroy)).subscribe(() => { 
          this.remindersMatTable?.renderRows();
    });
      
    interval(5000).pipe(
      tap(() => { 
        this.reminderService.reminders?.map(reminder => reminder.executionCheck())})).pipe(
        takeUntil(this.destroy)).subscribe();
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }

  matTableWrapperScrollToBottom() : void
  {
    this.remindersMatTableWrapper!.nativeElement.scrollTop = this.remindersMatTableWrapper!.nativeElement.scrollHeight;
  }
}