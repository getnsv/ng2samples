import {Component,Output} from 'angular2/core';


@Component({
    selector:'my-appl',
    template:`
    <div *ngIf="people.length >0" id="div1">
        list of famous people
    </div>
    <div *ngIf="people.length==0" id="div2">
        You do not have any people
    </div>
    <div *ngIf="people.length >0" id="div3">
        list of famous people
    </div>
    <div *ngIf="people.length==0" id="div4">
        You do not have any people
    </div>
    <div [hidden]="people.length==0" id="div5">
        You do not have any people
    </div>
    <div [hidden]="people.length>0" id="div5">
        list of famous people
    </div>
    `
    
})

export class AppComponent{

    people=["sachin"];

}