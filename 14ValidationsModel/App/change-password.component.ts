import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { PasswordValidators } from './password.validators'


@Component({
    selector: "chng-pwd-form",
    templateUrl: "app/change-password.component.html"

})

export class ChangePasswordComponent {
    /*form = new ControlGroup({
        userName: new Control('', Validators.required),
        password: new Control('', Validators.required)
    });*/
    form: ControlGroup;
    constructor(fb: FormBuilder) {
        //this is a factory following builder pattern
        this.form = fb.group({
            newPassword: ['', 
            Validators.compose //synchronized parameters
            (
                [
                 Validators.required,
                 PasswordValidators.shouldContainNumber
                ]
            ),
           
        ],
            password: ['', Validators.required]
        })
    }
    changepwd() {
        //promise is always async
        //assume you make a service call
        var result=true;
        this.form.find("newPassword").setErrors({
            invalidPassword:true
        });
        console.log(this.form.value);
    }
}