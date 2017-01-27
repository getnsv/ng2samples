import {Component,Output} from 'angular2/core';
import {SignUpFormComponent} from './signup-form.component'
import {ChangePasswordComponent} from './change-password.component'

@Component({
    selector:'my-appl',
    template:`
    <h1>Welcome to angular2</h1>
    <!--<signup-form></signup-form>-->
    <chng-pwd-form></chng-pwd-form>
    
    `,

    directives:[SignUpFormComponent,ChangePasswordComponent]
    
    
})

export class AppComponent{

    


}