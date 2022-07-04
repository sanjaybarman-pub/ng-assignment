import { Data } from "@angular/router";

export interface ITimerData {
    limit: number; 
    isActive: boolean;
    startTime?: string;
    endTime?: string;
   }
   