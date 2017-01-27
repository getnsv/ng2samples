import {Component,Output} from 'angular2/core';
import {ContactFormComponent} from './contact-form.component'


@Component({
    selector:'my-appl',
    template:`
    <h1>Welcome to angular2</h1>
    <contact-form></contact-form>
    
    `,
    directives:[ContactFormComponent]
    
    
    
})

export class AppComponent{

    


}