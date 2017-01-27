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
    var ExpandableComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ExpandableComponent = (function () {
                function ExpandableComponent() {
                    this.isExpanded = false;
                }
                ExpandableComponent.prototype.toggle = function () {
                    this.isExpanded = !this.isExpanded;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], ExpandableComponent.prototype, "title", void 0);
                ExpandableComponent = __decorate([
                    core_1.Component({
                        selector: "expandCollapse",
                        styles: ["\n    .mycontainer{\n        border: 1px solid#ccc;\n        border-radius:2px;\n    }\n    .mycontainer .mytitle{\n        padding:20px;\n        font-weight:bold;\n    }\n    .mycontainer .mytitle:hover{\n        background:#f0f0f0;\n        cursor:pointer;\n    }\n    .mycontainer .mycontent{\n        padding:20px;\n    }\n    \n    "],
                        template: "\n    <div class=\"mycontainer\">\n        <div class=\"mytitle\"(click)=\"toggle()\">\n          {{title}}  \n          <i \n          class=\"pull-right glyphicon \"\n          [ngClass]=\"\n          {\n              'glyphicon-chevron-down':!isExpanded,\n              'glyphicon-chevron-up':isExpanded\n          }\"\n          >\n          </i>\n        </div>\n        <div class=\"mycontent\" *ngIf=\"isExpanded\">\n        <ng-content></ng-content>\n        </div>\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ExpandableComponent);
                return ExpandableComponent;
            }());
            exports_1("ExpandableComponent", ExpandableComponent);
        }
    }
});
//# sourceMappingURL=expandable.component.js.map