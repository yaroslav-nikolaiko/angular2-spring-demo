import {Component, Input} from '@angular/core';
import {LikeComponent} from "../like/like.component";

@Component({
    selector: 'tweet',
    templateUrl: 'app/templates/tweet.html',
    styles: [`
        .handle {
            color: #ccc;
        }
        
        .media {
            margin-bottom: 20px;
        }
        
        .media-object {
            border-radius: 10px;
        }
    `],
    directives: [LikeComponent]
})
export class TweetComponent {
    @Input() data ={};
}
