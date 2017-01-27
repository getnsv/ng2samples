System.register(['angular2/core', 'angular2/common', './password.validators'], function(exports_1, context_1) {
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
    var core_1, common_1, password_validators_1;
    var ChangePasswordComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (password_validators_1_1) {
                password_validators_1 = password_validators_1_1;
            }],
        execute: function() {
            ChangePasswordComponent = (function () {
                function ChangePasswordComponent(fb) {
                    //this is a factory following builder pattern
                    this.form = fb.group({
                        newPassword: ['',
                            common_1.Validators.compose //synchronized parameters
                            ([
                                common_1.Validators.required,
                                password_validators_1.PasswordValidators.shouldContainNumber
                            ]),
                        ],
                        password: ['', common_1.Validators.required]
                    });
                }
                ChangePasswordComponent.prototype.changepwd = function () {
                    //promise is always async
                    //assume you make a service call
                    var result = true;
                    this.form.find("newPassword").setErrors({
                        invalidPassword: true
                    });
                    console.log(this.form.value);
                };
                ChangePasswordComponent = __decorate([
                    core_1.Component({
                        selector: "chng-pwd-form",
                        templateUrl: "app/change-password.component.html"
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ChangePasswordComponent);
                return ChangePasswordComponent;
            }());
            exports_1("ChangePasswordComponent", ChangePasswordComponent);
        }
    }
});
//# sourceMappingURL=change-password.component.js.map