import {Component,Output} from 'angular2/core';


@Component({
    selector:'my-appl',
    template:`
       <div >
        <ul>
            <li *ngFor="#frt of fruits">
                {{frt}}
             </li>
        </ul>
       </div>
       <table class="table table-border table-hover"> 
       <thead>
            <tr><th>#</th><th>fruits</th></tr>
       </thead>
       <tbody>
       <tr *ngFor="#frt of fruits,#i= index">
       <th>{{i+1}}</th>
       <th>{{frt}}</th>
       </tbody>
       </table>
       <br/>
       <table class="table table-border table-hover"> 
       <thead>
            <tr><th>#</th><th>fruits</th></tr>
       </thead>
       <tbody>
       <template ngFor [ngForOf]="fruits" #frt #i=index>
        <tr>
        
            <th>{{i+1}}</th>
            <th>{{frt}}</th>
        </tr>
       </template>
       </tbody>
       </table>
    `
    
})

export class AppComponent{

   fruits=["Apple","Banana","Orange","Papaya"]

}