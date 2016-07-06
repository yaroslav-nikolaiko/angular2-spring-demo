import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {provideForms, disableDeprecatedForms} from "@angular/forms";

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    disableDeprecatedForms(),
    provideForms()
])
    .catch(err => console.error(err));
