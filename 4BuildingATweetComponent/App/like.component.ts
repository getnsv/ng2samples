import { Component, Input, Output } from 'angular2/core';


@Component({

    selector:'like',
    template:`
     
    <i class="glyphicon glyphicon-heart"
    [class.highlighted]="iLike"
    (click)="onClick()"
    >
    </i>

    <span>{{totallikes}}  </span>
    `,
    styles:[`
        .glyphicon-heart
        {
            color:#ccc;
            cursor:pointer;
        }
        .highlighted
        {
            color:deeppink;
        }
    `]

})

export class LikeComponent {
    @Input() totallikes = 0;
    @Input() iLike = false;


    onClick() {
        this.iLike = !this.iLike;
        this.totallikes += this.iLike ? 1 : -1;
    }
}