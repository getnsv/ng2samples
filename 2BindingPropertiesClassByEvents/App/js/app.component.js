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
                    this.title = "India Won England";
                    this.isActive = true;
                    this.isFavourite = true;
                    this.isLiked = true;
                    this.likecount = 5;
                }
                AppComponent.prototype.onClick = function () {
                    console.log("Clicked Event");
                };
                AppComponent.prototype.onClick1 = function ($event) {
                    console.log("Clicked Event", $event);
                };
                AppComponent.prototype.onClick2 = function ($event) {
                    $event.stopPropagation();
                    console.log("Clicked event 2", $event);
                };
                AppComponent.prototype.onDivClick = function () {
                    console.log("click of the div");
                };
                AppComponent.prototype.funstar = function () {
                    this.isFavourite = !this.isFavourite;
                };
                AppComponent.prototype.funheart = function () {
                    console.log(this.likecount);
                    console.log(this.isLiked);
                    this.isLiked = !this.isLiked;
                    if (this.isLiked == true)
                        this.likecount++;
                    else
                        this.likecount--;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-appl',
                        template: "\n    <h1>{{title}}</h1>\n    <br/>\n    <!--<button class='btn btn-primary ' \n    [class.newClass]='isActive'>PropertyClassBinding\n    </button>\n\n    <button class='btn btn-primary '\n     [style.backgroundColor]=\"isActive? 'red':'green'\">PropertyStyleBinding\n     </button>\n\n     <button class='btn btn-primary '\n     (click)='onClick()'>EventBinding1\n     </button>\n\n    <button class='btn btn-primary '\n     on-click='onClick()'>EventBinding2\n     </button>\n\n     <button class='btn btn-primary '\n     on-click='onClick1($event)'>EventBinding3\n     </button>\n\n     <div (click)=\"onDivClick()\">\n        <button class='btn btn-primary '\n        on-click='onClick1($event)'>EventBinding4\n        </button>\n     </div>\n\n     <div (click)=\"onDivClick()\">\n        <button class='btn btn-primary '\n        on-click='onClick2($event)'>EventBinding5\n        </button>\n     </div>-->\n     \n     <div id=\"twoWayBinding1\">\n        <input\n         type =\"text\" \n         [value]=\"title\"\n         (input)='title=$event.target.value'/>\n        <input type=\"button\" (click)=\"title=''\" value=\"clear\"/>\n        Preview:{{title}}\n     </div>\n    <!-- This is not working, need to check the syntax\n     <div id=\"twoWayBinding2\">\n        <input\n          type =\"text\"\n         [(ng-model)]=\"title\"\n         (input)='title=$event.target.value'\n         />\n        <input type=\"button\" (click)=\"title=''\" value=\"clear\"/>\n        Preview:{{title}}\n     </div>\n     -->\n      \n     <div id=\"twoWayBinding3\">\n        <input\n         type =\"text\" \n         bindOn-ngModel=\"title\"\n         (input)='title=$event.target.value'/>\n        <input type=\"button\" (click)=\"title=''\" value=\"clear\"/>\n        Preview:{{title}}\n     </div>\n\n     <i class=\"glyphicon glyphicon-star\"> </i>\n     <i class=\"glyphicon glyphicon-star-empty\"> </i>\n     <i \n     [style.color]='isFavourite ? \"green\":\"red\"'\n     class=\"glyphicon\" \n     [class.glyphicon-star]='isFavourite' \n     [class.glyphicon-star-empty]='!isFavourite'\n     (click)=\"funstar()\"\n     ></i>\n     <!--heart component-->\n     <i class=\"glyphicon glyphicon-heart\"> </i>\n     <i class=\"glyphicon glyphicon-heart-empty\"> </i>\n    <br/>\n     \n     <i \n     [style.color]='isLiked ? \"green\":\"red\"'\n     class=\"glyphicon\" \n     [class.glyphicon-heart]='isLiked' \n     [class.glyphicon-heart-empty]='!isLiked'\n     (click)=\"funheart() \" \n     ></i> {{likecount}}\n     \n    "
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