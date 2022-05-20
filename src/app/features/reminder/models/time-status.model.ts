import { TimeStatusType } from "../enums/time-status-type.enum";

export class TimeStatus
{
    public Name:string;
    public Description:string;
    public Type:TimeStatusType;

    constructor(
        name:string,
        description:string,
        type:TimeStatusType
    )
    {
        this.Name = name;
        this.Description = description;
        this.Type = type;
    }
}