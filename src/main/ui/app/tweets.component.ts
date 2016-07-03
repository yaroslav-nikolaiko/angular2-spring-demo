import {Component} from '@angular/core';
import {TweetComponent} from "./tweet/tweet.component";
import {TweetService} from "./tweet/tweet.service";

@Component({
    selector: 'tweets',
    template: `
    <div *ngFor="#tweet of tweets">
         <tweet [data]="tweet"></tweet>
    </div>
    `,
    directives: [TweetComponent],
    providers: [TweetService]
})
export class TweetsComponent {
    tweets=[];

    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets();
    }

}
