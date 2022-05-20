import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class NumberService
{
    public isOdd(number:number) : boolean
    {
        return number % 2 === 0 ? true : false;
    }
}