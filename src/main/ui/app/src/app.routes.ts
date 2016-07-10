import {provideRouter, RouterConfig} from '@angular/router';
import {UsersComponent} from "./user/users.component";
import {PostsComponent} from "./posts.component";
import {UserFormComponent} from "./user/user.form.component";
import {CanDeactivateUserForm} from "./utils/can.deacrivate.user.form";

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: "users",
        pathMatch: "full"
    },
    { path: 'users', component: UsersComponent },
    { path: 'users/:href', component: UserFormComponent, canDeactivate: [CanDeactivateUserForm] },
    { path: 'posts', component: PostsComponent }
];



export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];