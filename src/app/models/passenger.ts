import {Child } from './child';

export interface Passenger {
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkedInDate: number | null;
    luggage: string;
  }
