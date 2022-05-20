import { ExecutionStatusType } from "../enums/execution-status.enum";
import { TimeStatusType } from "../enums/time-status-type.enum";
import { ExecutionStatus } from "./execution-status.model";
import { TimeStatus } from "./time-status.model";

export class Reminder
{
    public Id:string;
    public ShortDescription:string;
    public FullDescription:string;
    public CreatedAt:Date;
    public ExecutedAt:Date;
    public Status:ExecutionStatus | TimeStatus;

    public get isOverdue() : boolean
    {  
        return this.Status.Type == TimeStatusType.Overdue && !this.isExecuted;
    }

    public get isExecuted() : boolean
    {
        return this.Status.Type == ExecutionStatusType.Executed; 
    }

    constructor(
        id:string,
        shortDescription:string,
        fullDescription:string,
        createdAt:Date,
        executedAt:Date,
        status:ExecutionStatus | TimeStatus
    )
    {
        this.Id = id;
        this.ShortDescription = shortDescription;
        this.FullDescription = fullDescription;
        this.CreatedAt = createdAt;
        this.ExecutedAt = executedAt;
        this.Status = status;
    }

    public executionCheck()
    {
        if (this.isExecuted)
        {
            return;
        }
        
        let dateNow = new Date();

        if (dateNow > this.ExecutedAt)
        {
            this.Status.Type = TimeStatusType.Overdue; 
        }    
    }

    public execute()
    {
        this.Status.Type = ExecutionStatusType.Executed;
    }
}