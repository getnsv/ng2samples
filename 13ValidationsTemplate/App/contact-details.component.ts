import {Component,Output} from 'angular2/core';

@Component({
    selector:"contact-details",
    templateUrl:"app/contact-details.component.html",
    styles:[`
    .ng-touched.ng-invalid
    {
        border:1px solid red;
    }
    `]

})

export class ContactDetailsComponent
{
    log(x)
    {
        console.log(x);
    }
    onSubmit(frm)
    {
        console.log(frm);
    }
    frequencies=[
        {id:1,label:'Daily'},
        {id:2,label:'Weekly'},
        {id:3,label:'Monthly'}

    ];
}