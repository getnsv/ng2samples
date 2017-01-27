import {Component,Output} from 'angular2/core';
//elvis operator
@Component({
    selector:'my-appl',
    template:`
    <h1>Welcome to angular2</h1>
    <ul>
    <li> Title:{{task.title}}</li>
    <li> assignee:{{task?.assignee}}</li>
    <li> name:{{task?.assignee?.name}}</li>
    </ul>
    
    `
    
})

export class AppComponent{

task={
    title:"Testing to be done at bit level for low latency programs"

};

}