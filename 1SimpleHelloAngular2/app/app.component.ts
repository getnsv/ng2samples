import {Component} from 'angular2/core';
import {CriketersComponent} from './criketers.component';
import {CoachesComponent} from './coaches.component'

@Component({
    selector:'my-appl',
    template:`
    <h1>Hello Guys, Welcome to Colossal</h1>
    <h2><my-cric></my-cric></h2>
    <h2><my-coach></my-coach></h2>
    `,
    directives:[CriketersComponent,CoachesComponent]
})
export class AppComponent
{

}