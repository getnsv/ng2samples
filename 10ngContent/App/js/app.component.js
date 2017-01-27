System.register(['angular2/core', './bootstrap.panel.component'], function(exports_1, context_1) {
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
    var core_1, bootstrap_panel_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (bootstrap_panel_component_1_1) {
                bootstrap_panel_component_1 = bootstrap_panel_component_1_1;
            }],
        execute: function() {
            /*
            <bs-panel>
                    <h4>Sachin is the best </h4>
                </bs-panel>
                <bs-panel>
                    <h4>Apple </h4>
                    <h4>Orange </h4>
                </bs-panel>
            */
            AppComponent = (function () {
                function AppComponent() {
                    this.task = {
                        title: "Testing to be done at bit level for low latency programs"
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-appl',
                        template: "\n    <h1>Welcome to angular2</h1>\n    <bs-panel>\n        <h2 class=\"heading\">My players</h2>\n        <h4 class=\"body\">Sachin is the best </h4>\n    </bs-panel>\n    <bs-panel>\n        <h2 class=\"heading\">My fruits</h2>\n        <h4 class=\"body\">Apple </h4>\n        <h4 class=\"body\">Orange </h4>\n    </bs-panel>\n    \n    ",
                        directives: [bootstrap_panel_component_1.BootstrapPanel]
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