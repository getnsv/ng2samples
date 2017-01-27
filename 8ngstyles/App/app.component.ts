import {Component,Output} from 'angular2/core';

@Component({
    selector:'my-appl',
    template:`
    <h1>Welcome to angular2</h1>
    <button
    [style.backgroundColor]="canSave?'blue':'gray'"
    [style.color]="canSave?'white':'black'"
    [style.fontWeight]="canSave ? 'bold':'normal'"
    >Submit</button>

    <button
    [style.backgroundColor]="canSave1 ?'blue':'gray'"
    [style.color]="canSave1 ?'white':'black'"
    [style.fontWeight]="canSave1 ? 'bold':'normal'"
    >Submit</button>

    <button
      [ngStyle]="{
          backgroundColor:canSave1?'blue':'gray',
          color:canSave1?'white':'black',
          fontWeight:canSave1?'bold':'normal',
      }"
    >Submit</button>
    
    `
    
})

export class AppComponent{
canSave=false;
canSave1=!this.canSave;

}