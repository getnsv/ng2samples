import {Component} from 'angular2/core';
import {Input,Output,EventEmitter} from 'angular2/core';

@Component({
    selector:"myfavorite",
    templateUrl:"App/favorite.template.html",
    //inputs:["isFavorite"]
    //inputs:["isFavorite:is-favorite"] //using alias
    styles:[`
        .glyphicon-star
        {
            color:green;
        }
    `]
})

export class FavoriteComponent{
    @Input() isFavorite=false;
    //@Input("is-favorite") isFavorite=false;
    @Output() change= new EventEmitter();
    onClick()
    {
        this.isFavorite =!this.isFavorite;
        this.change.emit({myInfo:"India plays England today"});
    }
}