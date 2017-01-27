import {Component,Output} from 'angular2/core';
import {SummaryPipe} from './summary.pipe';


@Component({
    selector:'my-appl',
    template:`
    <h1>Angular 2 pipes</h1>
    {{asphoghal.title}}
    <br/>
    {{asphoghal.title | uppercase}}
    <br/>
    {{asphoghal.title | lowercase}}
    <br/>
    {{asphoghal.patients}}
    <br/>
    {{asphoghal.patients | number}}
    <br/>
    {{asphoghal.patients | number:"2.2-3"}}
    <br/>
    {{asphoghal.price}}
    <br/>
    {{asphoghal.price | currency}}
     <br/>
    {{asphoghal.price | currency : "AUD"}}
     <br/>
    {{asphoghal.price | currency : "AUD":true}}
    <br/>
    {{asphoghal.price | currency : "INR"}}
     <br/>
    {{asphoghal.price | currency : "INR":true}}
    <br/>
    {{asphoghal.price | currency : "INR":true:'2.2-2'}}

    <br/>
    {{asphoghal.expiry}}
    <br/>
    {{asphoghal.expiry | date}}
    <br/>
    {{asphoghal.expiry | date:'year'}}
    <br/>
    {{asphoghal.expiry | date:'shortDate'}}
    <br/>
    {{asphoghal.expiry | date:'longDate'}}
    <br/>
    {{asphoghal.expiry | date:'shortTime'}}
    <br/>
    {{asphoghal.expiry | date:'longTime'}}
    <br/>
    {{asphoghal.expiry | date:'MMM yyyy'}}

    <br/>
    {{asphoghal | json}}
    <br/>
    {{asphoghal.description}}
    <br/>
    {{asphoghal.description | Summary}}
    <br/>
    {{asphoghal.description | Summary:15}}


    `,
    pipes:[SummaryPipe]
    
})

export class AppComponent{

  asphoghal={
      title:"Stomach cleanliness",
      rating:4.984,
      price:99.954,
      expiry:new Date(2017,3,1),
      patients:5432,
      description:
      `"We wish to thank all delegates for attending and contributing to the Lowitja Institute International Indigenous Health and Wellbeing Conference. Safe travels.
               The Lowitja Institute International Indigenous Health and Wellbeing Conference 2016 sought to celebrate, share and strengthen Indigenous knowledges and bring together Indigenous people from around Australia and the world. Underpinned by a strong cultural framework, the conference connected our peoples and others committed to working with us."
     `
  };

}