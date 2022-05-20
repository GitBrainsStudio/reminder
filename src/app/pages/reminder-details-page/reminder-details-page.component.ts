import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject, takeUntil } from 'rxjs';
import { Reminder } from '../../features/reminder/models/reminder.model';
import { ReminderService } from '../../features/reminder/services/reminder.service';

@Component({
  selector: 'app-reminder-details-page',
  templateUrl: './reminder-details-page.component.html',
  styleUrls: ['./reminder-details-page.component.scss']
})
export class ReminderDetailsPageComponent implements OnInit, OnDestroy {

  reminder:Reminder | null = null;
  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);

  constructor(
    private activatedRoute:ActivatedRoute,
    private reminderService:ReminderService,
    private router:Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {

    let reminderId = this.activatedRoute.snapshot.params['id'];
    this.reminderService.getById(reminderId).pipe(
      takeUntil(this.destroy)).subscribe(
      (reminder:Reminder | undefined) => { 
        if (reminder)
        {
          this.reminder = reminder;
        }
        else
        {
          this.router.navigate(['/']);
          this.snackBar.open('Некорректный идентификатор', 'Закрыть', { duration: 3000 });
        }
      }
    )
  }

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}