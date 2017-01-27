System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            imageUrl: "http://lorempixel.com/100/100/people/?1",
                            author: "Sachin",
                            handle: "@tendulkar",
                            body: "The Cricket bat looks too heavy now for me...",
                            totalLikes: 6,
                            iLike: true
                        },
                        {
                            imageUrl: "http://lorempixel.com/100/100/people/?2",
                            author: "Kapil",
                            handle: "@dev",
                            body: "The Cricket ball looks too small for me...",
                            totalLikes: 7,
                            iLike: false
                        },
                        {
                            imageUrl: "http://lorempixel.com/100/100/people/?3",
                            author: "Sunil",
                            handle: "@gavaskar",
                            body: "The Cricket helmet looks too heavy now for me...",
                            totalLikes: 5,
                            iLike: false
                        }
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map