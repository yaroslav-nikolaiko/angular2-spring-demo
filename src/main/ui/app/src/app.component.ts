import {Component} from '@angular/core';
import {NavbarComponent} from "./navbar.component";

@Component({
    selector: 'my-app',
    template: `
    <my-navbar></my-navbar>
    `,
    directives: [NavbarComponent]
})
export class AppComponent {

    
}
