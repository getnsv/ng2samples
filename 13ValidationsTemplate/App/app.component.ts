import {Component,Output} from 'angular2/core';
//import {ContactFormComponent} from './contact-form.component'
import {ContactDetailsComponent} from './contact-details.component'

@Component({
    selector:'my-appl',
    template:`
    <h1>Welcome to angular2</h1>
    <!--<contact-form></contact-form> -->
    <contact-details></contact-details>
    
    `,
    //directives:[ContactFormComponent]
    directives:[ContactDetailsComponent]
    
    
    
})

export class AppComponent{

    


}