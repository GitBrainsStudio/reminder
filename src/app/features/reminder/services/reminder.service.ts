import { Injectable } from "@angular/core";
import { Observable, of, tap } from "rxjs";
import { GuidService } from "../../../utils/services/guid.service";
import { NumberService } from "../../../utils/services/number.service";
import { ExecutionStatusType } from "../enums/execution-status.enum";
import { TimeStatusType } from "../enums/time-status-type.enum";
import { ExecutionStatus } from "../models/execution-status.model";
import { Reminder } from "../models/reminder.model";
import { TimeStatus } from "../models/time-status.model";

@Injectable({providedIn:'root'})
export class ReminderService
{   
    public reminders:Reminder[] = []

    public get overdueRemindersCount() : number 
    {
      return this.reminders!.filter(r => r.isOverdue).length;
    }
    public get executedRemindersCount() : number
    {
      return this.reminders!.filter(r => r.isExecuted).length;
    }

    constructor(
        private guidService:GuidService,
        private numberService:NumberService)
    {
        this.guidService = guidService;
        this.numberService = numberService;
    }

    public generate() : Observable<Reminder>
    {
        return of(this.create()).pipe(
            tap(reminder => this.reminders.push(reminder)));
    }

    private create() : Reminder
    {
        let dateNow = new Date;
        let dateNext = new Date;

        let reminderId = this.guidService.generate();
        let reminderShortDescription = 'ReminderShortDescription';
        let reminderFullDescription = 'ReminderFullDescription';
        let reminderCreatedAt = dateNow;
        let reminderExecutedAt = null;
        let reminderStatus = null;

        if (this.numberService.isOdd(dateNow.getSeconds()))
        {
            reminderExecutedAt = new Date(dateNext.setSeconds(dateNow.getSeconds() + 5));
            reminderStatus = new ExecutionStatus(
                'ExecutionStatusName',
                ExecutionStatusType.New);
        }
        else
        {
            reminderExecutedAt = new Date(dateNext.setSeconds(dateNow.getSeconds() + 7));
            reminderStatus = new TimeStatus(
                'TimeStatusName',
                'TimeStatusDescription',
                TimeStatusType.Planned);
        }

        return new Reminder(
            reminderId,
            reminderShortDescription,
            reminderFullDescription,
            reminderCreatedAt,
            reminderExecutedAt,
            reminderStatus
        );
    }

    public getById(id:string) : Observable<Reminder | undefined>
    {
        return of(this.reminders.find(reminder => reminder.Id == id));
    }
}