System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UsernameValidators;
    return {
        setters:[],
        execute: function() {
            UsernameValidators = (function () {
                function UsernameValidators() {
                }
                UsernameValidators.cannotContainSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0)
                        return {
                            cannotContainSpace: true
                        };
                    else
                        return null;
                };
                UsernameValidators.shouldBeUnique = function (control) {
                    //es6, lambda expression, closure for us
                    return new Promise(function (resolve, reject) {
                        //service call
                        setTimeout(function () {
                            if (control.value == "sachin")
                                resolve({ shouldBeUnique: true }); //can be any variable name no need or resolve
                            else
                                resolve(null);
                        }, 1000);
                    });
                };
                return UsernameValidators;
            }());
            exports_1("UsernameValidators", UsernameValidators);
        }
    }
});
//# sourceMappingURL=username.validators.js.map