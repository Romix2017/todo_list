import { NgModule, Injector } from '@angular/core';
import {
    HttpModule, XHRBackend, BrowserXhr,
    ResponseOptions, XSRFStrategy
} from '@angular/http';
import {
    InMemoryBackendService,
    InMemoryDbService
} from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../dbService'
import { environment } from '../environments/environments';
export function getXHRBackend(injector: Injector, browser: BrowserXhr,
    xsrf: XSRFStrategy, options: ResponseOptions): any {
    if (environment.production) {
        console.log("works");
        return new XHRBackend(browser, options, xsrf);
    } else {
        console.log("works123");
        return new InMemoryBackendService(
            injector,
            new InMemoryDataService(),
            { apiBase: 'api/latest/' }
        );
    }
}
@NgModule({
    imports: [HttpModule],
    providers: [
        {
            provide: XHRBackend,
            useFactory: getXHRBackend,
            deps: [Injector, BrowserXhr, XSRFStrategy, ResponseOptions]
        }
    ]
})
export class AppHttpModule {
}