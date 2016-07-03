import {Component} from '@angular/core';
import {TweetsComponent} from "./tweets.component";

@Component({
    selector: 'my-app',
    template: `
    <h1>Twitter Page 2 1</h1>
    <tweets></tweets>
    `,
    directives:[TweetsComponent]
})
export class AppComponent {

    
}
