System.register(['angular2/core', './summary.pipe'], function(exports_1, context_1) {
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
    var core_1, summary_pipe_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.asphoghal = {
                        title: "Stomach cleanliness",
                        rating: 4.984,
                        price: 99.954,
                        expiry: new Date(2017, 3, 1),
                        patients: 5432,
                        description: "\"We wish to thank all delegates for attending and contributing to the Lowitja Institute International Indigenous Health and Wellbeing Conference. Safe travels.\n               The Lowitja Institute International Indigenous Health and Wellbeing Conference 2016 sought to celebrate, share and strengthen Indigenous knowledges and bring together Indigenous people from around Australia and the world. Underpinned by a strong cultural framework, the conference connected our peoples and others committed to working with us.\"\n     "
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-appl',
                        template: "\n    <h1>Angular 2 pipes</h1>\n    {{asphoghal.title}}\n    <br/>\n    {{asphoghal.title | uppercase}}\n    <br/>\n    {{asphoghal.title | lowercase}}\n    <br/>\n    {{asphoghal.patients}}\n    <br/>\n    {{asphoghal.patients | number}}\n    <br/>\n    {{asphoghal.patients | number:\"2.2-3\"}}\n    <br/>\n    {{asphoghal.price}}\n    <br/>\n    {{asphoghal.price | currency}}\n     <br/>\n    {{asphoghal.price | currency : \"AUD\"}}\n     <br/>\n    {{asphoghal.price | currency : \"AUD\":true}}\n    <br/>\n    {{asphoghal.price | currency : \"INR\"}}\n     <br/>\n    {{asphoghal.price | currency : \"INR\":true}}\n    <br/>\n    {{asphoghal.price | currency : \"INR\":true:'2.2-2'}}\n\n    <br/>\n    {{asphoghal.expiry}}\n    <br/>\n    {{asphoghal.expiry | date}}\n    <br/>\n    {{asphoghal.expiry | date:'year'}}\n    <br/>\n    {{asphoghal.expiry | date:'shortDate'}}\n    <br/>\n    {{asphoghal.expiry | date:'longDate'}}\n    <br/>\n    {{asphoghal.expiry | date:'shortTime'}}\n    <br/>\n    {{asphoghal.expiry | date:'longTime'}}\n    <br/>\n    {{asphoghal.expiry | date:'MMM yyyy'}}\n\n    <br/>\n    {{asphoghal | json}}\n    <br/>\n    {{asphoghal.description}}\n    <br/>\n    {{asphoghal.description | Summary}}\n    <br/>\n    {{asphoghal.description | Summary:15}}\n\n\n    ",
                        pipes: [summary_pipe_1.SummaryPipe]
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