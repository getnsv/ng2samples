import {Component,Output} from 'angular2/core';
import {BootstrapPanel} from './bootstrap.panel.component'

/*
<bs-panel>
        <h4>Sachin is the best </h4>
    </bs-panel>
    <bs-panel>
        <h4>Apple </h4>
        <h4>Orange </h4>
    </bs-panel>
*/
@Component({
    selector:'my-appl',
    template:`
    <h1>Welcome to angular2</h1>
    <bs-panel>
        <h2 class="heading">My players</h2>
        <h4 class="body">Sachin is the best </h4>
    </bs-panel>
    <bs-panel>
        <h2 class="heading">My fruits</h2>
        <h4 class="body">Apple </h4>
        <h4 class="body">Orange </h4>
    </bs-panel>
    
    `,
    directives:[BootstrapPanel]
    
})

export class AppComponent{

task={
    title:"Testing to be done at bit level for low latency programs"

};

}