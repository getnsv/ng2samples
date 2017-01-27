import { Control } from 'angular2/common';

export class PasswordValidators {
    static shouldContainNumber(control: Control) {
        if (control.value.indexOf('0') >= 0)
            return {
                shouldContainNumber: true
            };
        else
            return null;
    }
   

}

