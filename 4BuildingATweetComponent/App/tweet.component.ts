import {Component,Input,Output} from 'angular2/core';
import {LikeComponent} from './like.component';


@Component({
    selector:'tweet',
    template:`
    <div class="media">
        <div class="media-left">
            <a href="#">
                <img class = "media-object" src="{{ data.imageUrl }}">
            </a>
        </div>
        <div class="media-body">
            <h4 class="media-heading">
                {{ data.author }} <span class="handle" {{ data.handle }}> </span>
            </h4>
            {{data.body}}
        </div>
        <div>
            <like [totallikes] ="data.totalLikes"
                  [iLike] ="data.iLike"
            >
            </like>
        </div>
    </div>

    
    `,
    directives:[LikeComponent],
    styles:[`
    .handle{
        color:#ccc;

    }
    .media{
        margin-bottom:20px;
    }
    .media-object{
        border-radius:10px;
    }
    
    `]
})

export class TweetComponent{
@Input() data;
constructor()
{
    console.log(this.data);
}

    

}