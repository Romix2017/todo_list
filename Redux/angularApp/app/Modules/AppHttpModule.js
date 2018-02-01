var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, Injector } from '@angular/core';
import { HttpModule, XHRBackend, BrowserXhr, ResponseOptions, XSRFStrategy } from '@angular/http';
import { InMemoryBackendService } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../dbService';
import { environment } from '../environments/environments';
export function getXHRBackend(injector, browser, xsrf, options) {
    if (environment.production) {
        console.log("works");
        return new XHRBackend(browser, options, xsrf);
    }
    else {
        console.log("works123");
        return new InMemoryBackendService(injector, new InMemoryDataService(), { apiBase: 'api/latest/' });
    }
}
var AppHttpModule = (function () {
    function AppHttpModule() {
    }
    AppHttpModule = __decorate([
        NgModule({
            imports: [HttpModule],
            providers: [
                {
                    provide: XHRBackend,
                    useFactory: getXHRBackend,
                    deps: [Injector, BrowserXhr, XSRFStrategy, ResponseOptions]
                }
            ]
        })
    ], AppHttpModule);
    return AppHttpModule;
}());
export { AppHttpModule };
//# sourceMappingURL=AppHttpModule.js.map