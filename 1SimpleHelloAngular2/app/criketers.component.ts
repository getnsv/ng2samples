import {Component} from 'angular2/core';
import {CricketersService} from './Cricketers.service'
import {ExpandMeDirective} from './myexpand.directive'

@Component({

    selector:'my-cric',
    template:`
    <input type="text" expandMe/>
    <br/>
    <input type="text">
    <h1>Here are my favorite cricketers</h1>
    <h2>{{title}}</h2>
    <ul>
        <li *ngFor="#star of myStars">{{star}}</li>
    </ul>
    `,
    providers:[CricketersService],
    directives:[ExpandMeDirective]
})
export class CriketersComponent
{
    title:string="The heroes of India";
    //myStars=["Kapil Dev","Sunil","Sachin"];
    myStars;
    constructor(CrickService:CricketersService)
    {
        this.myStars = CrickService.getCricketers();
    }
}