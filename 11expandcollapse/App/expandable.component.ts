import {Component,Input} from 'angular2/core';

@Component({
    selector:"expandCollapse",
    styles:[`
    .mycontainer{
        border: 1px solid#ccc;
        border-radius:2px;
    }
    .mycontainer .mytitle{
        padding:20px;
        font-weight:bold;
    }
    .mycontainer .mytitle:hover{
        background:#f0f0f0;
        cursor:pointer;
    }
    .mycontainer .mycontent{
        padding:20px;
    }
    
    `],
    template:`
    <div class="mycontainer">
        <div class="mytitle"(click)="toggle()">
          {{title}}  
          <i 
          class="pull-right glyphicon "
          [ngClass]="
          {
              'glyphicon-chevron-down':!isExpanded,
              'glyphicon-chevron-up':isExpanded
          }"
          >
          </i>
        </div>
        <div class="mycontent" *ngIf="isExpanded">
        <ng-content></ng-content>
        </div>
    </div>
    `

})


export class ExpandableComponent
{
    @Input() title:string;
    isExpanded=false;
    toggle(){
        this.isExpanded=!this.isExpanded;
    }

}