import {Component,Output} from 'angular2/core';
import {TweetService} from './tweet.service';
import {TweetComponent} from './tweet.component';

@Component({
    selector:"myTweets",
    template:`

        <div *ngFor="#twt of tweets">
            <tweet [data] ="twt">
            </tweet>
        
        </div>

    `,
    providers:[TweetService],
    directives:[TweetComponent]
})
export class TweetsComponent{

    tweets:any[];
    constructor(twtService:TweetService){
        this.tweets=twtService.getTweets();

    }
}