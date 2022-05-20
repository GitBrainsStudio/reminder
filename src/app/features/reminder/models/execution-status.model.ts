import { ExecutionStatusType } from "../enums/execution-status.enum";

export class ExecutionStatus
{
    public Name:string;
    public Type:ExecutionStatusType;

    constructor(name:string, type:ExecutionStatusType)
    {
        this.Name = name;
        this.Type = type;
    }
}