import {Component,ViewChild, ElementRef} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector:'my-appl',
    template:`
    <h1>Welcome to angular2</h1>
    <input id="search" type="text" class="form-control">

    
    `,

   
    
    
})

export class AppComponent{

@ViewChild("search")
search:ElementRef;

//lifecycle hook; observable comes from rxjs
ngAfterViewInit(){
    /*var keyUps=Observable.fromEvent(document.querySelector('#search'),
    'keyup');
    //data is a DOM object not ng object
    keyUps.subscribe(data=>console.log(data));
    */
    /*
    var keyUps=Observable.fromEvent(document.querySelector('#search'),'keyup')
    .map(e=>e.target.value)
    ;
    //data is a DOM object not ng object
    keyUps.subscribe(data=>console.log(data));
    */
    /*var keyUps=Observable.fromEvent(document.querySelector('#search'),'keyup')
    .map(e=>e.target.value)
    .filter(txt=>txt.length>=3)
    ;
    //data is a DOM object not ng object
    keyUps.subscribe(data=>console.log(data));
    */
    /*var keyUps=Observable.fromEvent(document.querySelector('#search'),'keyup')
    .map(e=>e.target.value)
    .filter(txt=>txt.length>=3)
    .debounceTime(400)
    ;*/
   /* var keyUps=Observable.fromEvent(document.querySelector('#search'),'keyup')
    .map(e=>e.target.value)
    .filter(txt=>txt.length>=3)
    .debounceTime(400)
    .distinctUntilChanged()
    ;
    //data is a DOM object not ng object
    keyUps.subscribe(
        //server calls
        data=>console.log(data)
        );*/
    var keyUps=Observable.fromEvent(document.querySelector('#search'),'keyup')
    .map(e=>e.target.value)
    .filter(txt=>txt.length>0)
    .debounceTime(400)
    .distinctUntilChanged()
    .flatMap(searchTerm=>{
        var url="https://jsonplaceholder.typicode.com/users?id=" +searchTerm
        var promise=$.getJSON(url);
        var observable=Observable.fromPromise(promise);
        return observable;
    })
    ;
    //data is a DOM object not ng object
    keyUps.subscribe(
        //server calls
        data=>{console.log(data[0].name) //can use interpolation aslo
        });
        
}
    constructor()
    {

    }


}