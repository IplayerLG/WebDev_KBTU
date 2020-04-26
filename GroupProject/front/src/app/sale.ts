import { Time } from '@angular/common';

export interface Sale {
    id : number,
    company : string,
    deadline : number,
    subscribers : number,
    value : number,
    cost : number,
    description : string,
    image : string,
    user : number,
}