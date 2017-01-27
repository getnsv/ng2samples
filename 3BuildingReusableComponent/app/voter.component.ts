import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
    selector:'voter',
    template:`
    <div>
    <i 
    class="glyphicon glyphicon-menu-up vote-button arrange"
    [class.highlighted]="myVote == 1"
    (click)="upVote()"
    ></i>
    
    <span class="vote-count arrange">{{voteCount + myVote}}</span>
    </div>
    
    <i 
    class="glyphicon glyphicon-menu-down vote-button arrange"
    [class.highlighted]="myVote == -1"
    (click)="downVote()"
    ></i>
    `,
    styles:[`
    .arrange
    {
        float:left;
        clear:both;
    }
    .vote-button
    {
        cursor:pointer;
    }
    .vote-count
    {
        font-size:1.2em;
        
    }
    .highlighted{
        font-weight:bold;
        color:orange;
    }
    `]

})

export class VoterComponent {
    @Input() voteCount = 0;
    @Input() myVote = 0;

    @Output() vote = new EventEmitter();

    upVote() {
        if (this.myVote == 1)
            return;
        this.myVote++;
        this.vote.emit(
            {
                called: "upVote",
                voteValue: this.myVote
            }
        );
    }
    downVote() {
        if(this.myVote ==-1)
            return;
        this.myVote--;
        this.vote.emit(
            {
                called: "downVote",
                voteValue: this.myVote
            }
        );
    }
}