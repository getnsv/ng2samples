import {Component} from 'angular2/core';
import {CoachesService} from './coaches.service'

@Component({

    selector:'my-coach',
    template:`
    <h1>Here are my favorite coaches</h1>
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor="#coach of myCoaches">{{coach}}</li>
    </ul>
    `,
    providers:[CoachesService]
})
export class CoachesComponent
{
    title:string="The Coaches of India";
    //myStars=["Kapil Dev","Sunil","Sachin"];
    myCoaches;
    constructor(CoachService:CoachesService)
    {
        this.myCoaches = CoachService.getCoaches();
    }
}