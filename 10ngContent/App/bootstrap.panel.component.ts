import {Component} from 'angular2/core'
/*
        <div class = "panel panel-default">
        <div class = "panel-heading">
            <h3 class = "panel-title">These are my players</h3>
            
        </div>
        <div class = "panel-body">
        <ng-content> </ng-content>
        </div>
        </div>
*/
@Component({
    selector:"bs-panel",
    template:`
        <div class = "panel panel-default">
        <div class = "panel-heading">
            <ng-content select=".heading"></ng-content>
            
        </div>
        <div class = "panel-body">
        <ng-content select=".body"></ng-content>
        </div>
        </div>
    `
})
export class BootstrapPanel
{

}