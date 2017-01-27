import {Component,Output} from 'angular2/core';
import {FavoriteComponent} from './favourite.component';

@Component({
    selector:'my-appl',
    template:`
    <h1>Welcome to angular2</h1>
    <myfavorite [isFavorite]="post.isFavorite">
    </myfavorite>
   
    `,
    directives:[FavoriteComponent]
    
})

export class AppComponent{
post={
    isFavorite:true
}
 

}