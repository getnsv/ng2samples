import { Control } from 'angular2/common';

export class UsernameValidators {
    static cannotContainSpace(control: Control) {
        if (control.value.indexOf(' ') >= 0)
            return {
                cannotContainSpace: true
            };
        else
            return null;
    }
    static shouldBeUnique(control: Control)
    {
        //es6, lambda expression, closure for us
        return new Promise((resolve,reject)=>{
            //service call
        setTimeout(function(){
            if(control.value=="sachin")
                resolve({shouldBeUnique:true})         //can be any variable name no need or resolve
            else
                resolve(null);
         }, 1000);
        });
    }

}

