System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.fruits = ["Apple", "Banana", "Orange", "Papaya"];
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-appl',
                        template: "\n       <div >\n        <ul>\n            <li *ngFor=\"#frt of fruits\">\n                {{frt}}\n             </li>\n        </ul>\n       </div>\n       <table class=\"table table-border table-hover\"> \n       <thead>\n            <tr><th>#</th><th>fruits</th></tr>\n       </thead>\n       <tbody>\n       <tr *ngFor=\"#frt of fruits,#i= index\">\n       <th>{{i+1}}</th>\n       <th>{{frt}}</th>\n       </tbody>\n       </table>\n       <br/>\n       <table class=\"table table-border table-hover\"> \n       <thead>\n            <tr><th>#</th><th>fruits</th></tr>\n       </thead>\n       <tbody>\n       <template ngFor [ngForOf]=\"fruits\" #frt #i=index>\n        <tr>\n        \n            <th>{{i+1}}</th>\n            <th>{{frt}}</th>\n        </tr>\n       </template>\n       </tbody>\n       </table>\n    "
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