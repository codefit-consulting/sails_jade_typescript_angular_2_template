System.register(['angular2/core', 'lodash'], function(exports_1, context_1) {
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
    var core_1, _;
    var lodash_version, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {
                _ = _1;
            }],
        execute: function() {
            lodash_version = _.VERSION;
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: JST['assets/templates/test.html']({ person: lodash_version }) // '<h1>My First Angular 2 App</h1>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQUdJLGNBQWM7Ozs7Ozs7Ozs7WUFBZCxjQUFjLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQU0vQjtnQkFBQTtnQkFBNEIsQ0FBQztnQkFKN0I7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVCxRQUFRLEVBQUUsUUFBUTt3QkFDbEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUEsb0NBQW9DO3FCQUM1RyxDQUFDOztnQ0FBQTtnQkFDMEIsbUJBQUM7WUFBRCxDQUFDLEFBQTdCLElBQTZCO1lBQTdCLHVDQUE2QixDQUFBIn0=