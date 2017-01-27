import { Component } from 'angular2/core';
import { ControlGroup, Control, Validators, FormBuilder } from 'angular2/common';
import { UsernameValidators } from './username.validators'


@Component({
    selector: "signup-form",
    templateUrl: "app/signup-form.component.html"

})

export class SignUpFormComponent {
    /*form = new ControlGroup({
        userName: new Control('', Validators.required),
        password: new Control('', Validators.required)
    });*/
    form: ControlGroup;
    constructor(fb: FormBuilder) {
        //this is a factory following builder pattern
        this.form = fb.group({
            userName: ['', 
            Validators.compose //synchronized parameters
            (
                [
                 Validators.required,
                 UsernameValidators.cannotContainSpace
                ]
            ),
            UsernameValidators.shouldBeUnique
        ],
            password: ['', Validators.required]
        })
    }
    signup() {
        //promise is always async
        //assume you make a service call
        var result=true;
        this.form.find("userName").setErrors({
            invalidLogin:true
        });
        console.log(this.form.value);
    }
}