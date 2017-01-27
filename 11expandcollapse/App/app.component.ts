import {Component,Output} from 'angular2/core';
import {ExpandableComponent} from './expandable.component'


@Component({
    selector:'my-appl',
    directives:[ExpandableComponent],
    template:`
    <h1>Welcome to angular2</h1>
    <expandCollapse title="Sachin Tendulkar">
        Sachin is one of the greatest batsment of his time
    </expandCollapse>
    <expandCollapse title="Virat Kohli">
        Virat Kohli is a young turk
    </expandCollapse>
    `
    
    
    
})

export class AppComponent{




}