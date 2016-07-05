import { provideRouter, RouterConfig } from '@angular/router';
import {UsersComponent} from "./user/users.component";
import {PostsComponent} from "./posts.component";

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: "users",
        pathMatch: "full"
    },
    { path: 'users', component: UsersComponent },
    { path: 'posts', component: PostsComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];