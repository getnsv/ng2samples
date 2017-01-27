import {Component,Output} from 'angular2/core';


@Component({
    selector:'my-appl',
    template:`
        <ul class="nav nav-pills">
            <li [class.active] ="viewMode=='map'"> <a (click)="viewMode='map'">Map view </a></li>
            <li [class.active]="viewMode=='list'"><a (click)="viewMode='list'"> List view </a></li>
        </ul>
        <div [ngSwitch]="viewMode">
            <template [ngSwitchWhen]="'map'"> Map view Presented </template>
            <template [ngSwitchWhen]="'list'"> List view Presented </template>
        </div>
    `
    
})

export class AppComponent{

    ViewMode='map';

}