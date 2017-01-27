System.register(['angular2/core', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Rx_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                //lifecycle hook; observable comes from rxjs
                AppComponent.prototype.ngAfterViewInit = function () {
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
                    var keyUps = Rx_1.Observable.fromEvent(document.querySelector('#search'), 'keyup')
                        .map(function (e) { return e.target.value; })
                        .filter(function (txt) { return txt.length > 0; })
                        .debounceTime(400)
                        .distinctUntilChanged()
                        .flatMap(function (searchTerm) {
                        var url = "https://jsonplaceholder.typicode.com/users?id=" + searchTerm;
                        var promise = $.getJSON(url);
                        var observable = Rx_1.Observable.fromPromise(promise);
                        return observable;
                    });
                    //data is a DOM object not ng object
                    keyUps.subscribe(
                    //server calls
                    function (data) {
                        console.log(data[0].name); //can use interpolation aslo
                    });
                };
                __decorate([
                    core_1.ViewChild("search"), 
                    __metadata('design:type', core_1.ElementRef)
                ], AppComponent.prototype, "search", void 0);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-appl',
                        template: "\n    <h1>Welcome to angular2</h1>\n    <input id=\"search\" type=\"text\" class=\"form-control\">\n\n    \n    ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map