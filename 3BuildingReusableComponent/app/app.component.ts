import {Component,Output} from 'angular2/core';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoterComponent} from './voter.component';

@Component({
    selector:'my-appl',
    template:`
    <h1>{{post.title}}
    </h1>
    <!--<myfavorite [isFavorite]="post.MyWish"></myfavorite>-->
    <myfavorite [is-favorite]="post.MyWish"></myfavorite>
    <myfavorite 
        [is-favorite]="post.MyWish"
        (change)="onFavoriteChange($event)"
    >
    </myfavorite>
    <like [totallikes] = "tweet.total"
          [iLike]="tweet.wish"
    >
    </like>
    <voter 
         [voteCount]="post.total"
         [myVote]="post.voteWish"
         (vote)="onVote($event)"
    >
    </voter>
    `,
    directives:[FavoriteComponent,LikeComponent,VoterComponent]
})

export class AppComponent{

    post={
        title:"My Reusable Components",
        MyWish:true,
        total:10,
        voteWish:false
    }
    tweet={
        total:12,
        wish:false
    }
    onFavoriteChange($event)
    {
        console.log($event);
    }

    onVote($event)
    {
        console.log($event);
    }

}