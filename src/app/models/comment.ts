import { Time } from '@angular/common';

export class Comment {
    id: string;
    by: string;
    kids: string[];
    parent: string;
    text: string;
    time: Time;
    type: string;
}
