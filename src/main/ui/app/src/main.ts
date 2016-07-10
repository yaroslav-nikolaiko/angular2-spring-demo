import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {provideForms, disableDeprecatedForms} from "@angular/forms";
import {CanDeactivateUserForm} from "./utils/can.deacrivate.user.form";
import {HTTP_PROVIDERS} from "@angular/http";
import {RestUtils} from "./utils/rest.utils";

bootstrap(AppComponent, [
    CanDeactivateUserForm,
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    RestUtils,
    disableDeprecatedForms(),
    provideForms()
])
    .catch(err => console.error(err));
