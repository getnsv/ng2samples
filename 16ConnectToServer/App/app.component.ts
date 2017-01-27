import {Component,ViewChild, ElementRef} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector:'my-appl',
    template:`
    {{title}}
    
    `,
    providers:[PostService, HTTP_PROVIDERS]

   
    
    
})

export class AppComponent{
title:any;
constructor(private _postService:PostService)
{
    this._postService.getPosts().subscribe(
        p=>{console.log(p[0].title);
        this.title=p[0].body;
    });
}

        
}
    


