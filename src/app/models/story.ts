import { Time } from '@angular/common';

export class Story {
    id: string;
    by: string;
    descendants: string;
    kids: string[];
    score: string;
    time: Time;
    title: string;
    type: string;
    url: string;
}
