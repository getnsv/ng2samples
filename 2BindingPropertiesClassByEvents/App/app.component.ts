import {Component} from 'angular2/core';


@Component({
    selector:'my-appl',
    template:`
    <h1>{{title}}</h1>
    <br/>
    <!--<button class='btn btn-primary ' 
    [class.newClass]='isActive'>PropertyClassBinding
    </button>

    <button class='btn btn-primary '
     [style.backgroundColor]="isActive? 'red':'green'">PropertyStyleBinding
     </button>

     <button class='btn btn-primary '
     (click)='onClick()'>EventBinding1
     </button>

    <button class='btn btn-primary '
     on-click='onClick()'>EventBinding2
     </button>

     <button class='btn btn-primary '
     on-click='onClick1($event)'>EventBinding3
     </button>

     <div (click)="onDivClick()">
        <button class='btn btn-primary '
        on-click='onClick1($event)'>EventBinding4
        </button>
     </div>

     <div (click)="onDivClick()">
        <button class='btn btn-primary '
        on-click='onClick2($event)'>EventBinding5
        </button>
     </div>-->
     
     <div id="twoWayBinding1">
        <input
         type ="text" 
         [value]="title"
         (input)='title=$event.target.value'/>
        <input type="button" (click)="title=''" value="clear"/>
        Preview:{{title}}
     </div>
    <!-- This is not working, need to check the syntax
     <div id="twoWayBinding2">
        <input
          type ="text"
         [(ng-model)]="title"
         (input)='title=$event.target.value'
         />
        <input type="button" (click)="title=''" value="clear"/>
        Preview:{{title}}
     </div>
     -->
      
     <div id="twoWayBinding3">
        <input
         type ="text" 
         bindOn-ngModel="title"
         (input)='title=$event.target.value'/>
        <input type="button" (click)="title=''" value="clear"/>
        Preview:{{title}}
     </div>

     <i class="glyphicon glyphicon-star"> </i>
     <i class="glyphicon glyphicon-star-empty"> </i>
     <i 
     [style.color]='isFavourite ? "green":"red"'
     class="glyphicon" 
     [class.glyphicon-star]='isFavourite' 
     [class.glyphicon-star-empty]='!isFavourite'
     (click)="funstar()"
     ></i>
     <!--heart component-->
     <i class="glyphicon glyphicon-heart"> </i>
     <i class="glyphicon glyphicon-heart-empty"> </i>
    <br/>
     
     <i 
     [style.color]='isLiked ? "green":"red"'
     class="glyphicon" 
     [class.glyphicon-heart]='isLiked' 
     [class.glyphicon-heart-empty]='!isLiked'
     (click)="funheart() " 
     ></i> {{likecount}}
     
    `
})
export class AppComponent
{
    title="India Won England";
    isActive=true;
    isFavourite=true;
    isLiked=true;
    likecount=5;
    onClick()
    {
        console.log("Clicked Event");
    }

    onClick1($event)
    {
        console.log("Clicked Event", $event);
    }
    onClick2($event)
    {
        $event.stopPropagation();
        console.log("Clicked event 2", $event);
    }
    onDivClick()
    {
        console.log("click of the div");
    }
    funstar()
    {
        this.isFavourite = !this.isFavourite;
    }
    funheart()
    {
        console.log(this.likecount);
        console.log(this.isLiked);
        
        
        this.isLiked = !this.isLiked;
        if(this.isLiked == true)
            this.likecount++;
        else
            this.likecount--;
    }
    
}