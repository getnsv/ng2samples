System.register(['angular2/core', './favorite.component', './like.component', './voter.component'], function(exports_1, context_1) {
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
    var core_1, favorite_component_1, like_component_1, voter_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (voter_component_1_1) {
                voter_component_1 = voter_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: "My Reusable Components",
                        MyWish: true,
                        total: 10,
                        voteWish: false
                    };
                    this.tweet = {
                        total: 12,
                        wish: false
                    };
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log($event);
                };
                AppComponent.prototype.onVote = function ($event) {
                    console.log($event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-appl',
                        template: "\n    <h1>{{post.title}}\n    </h1>\n    <!--<myfavorite [isFavorite]=\"post.MyWish\"></myfavorite>-->\n    <myfavorite [is-favorite]=\"post.MyWish\"></myfavorite>\n    <myfavorite \n        [is-favorite]=\"post.MyWish\"\n        (change)=\"onFavoriteChange($event)\"\n    >\n    </myfavorite>\n    <like [totallikes] = \"tweet.total\"\n          [iLike]=\"tweet.wish\"\n    >\n    </like>\n    <voter \n         [voteCount]=\"post.total\"\n         [myVote]=\"post.voteWish\"\n         (vote)=\"onVote($event)\"\n    >\n    </voter>\n    ",
                        directives: [favorite_component_1.FavoriteComponent, like_component_1.LikeComponent, voter_component_1.VoterComponent]
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