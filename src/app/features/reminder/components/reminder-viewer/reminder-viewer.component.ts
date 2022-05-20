import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Reminder } from '../../models/reminder.model';;

@Component({
  selector: 'app-reminder-viewer',
  templateUrl: './reminder-viewer.component.html',
  styleUrls: ['./reminder-viewer.component.scss']
})
export class ReminderViewerComponent implements OnInit {

  @Input() reminder:Reminder | null = null;
  reminderForm:FormGroup;
  
  constructor(
    private formBuilder:FormBuilder,
    private snackBar: MatSnackBar)
  {
    this.reminderForm = this.formBuilder.group(
      {
        Id: ['', Validators.required],
        ShortDescription: ['', Validators.required],
        FullDescription: ['', Validators.required],
        CreatedAt: ['', Validators.required],
        ExecutedAt: ['', Validators.required]
      }
    );
    this.reminderForm.disable();
  }
  
  ngOnInit(): void {
    this.reminderForm.patchValue(this.reminder!);
  }

  execute()
  {
    this.reminder?.execute();
    this.snackBar.open('Статус обновлён успешно', 'Закрыть', { duration: 3000})
  }
}