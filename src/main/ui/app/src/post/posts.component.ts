import {Component, OnInit} from "@angular/core";

import {PostService} from './post.service';
import {Post} from "./post";

@Component({
    templateUrl: 'app/templates/posts.html',
    providers: [PostService]
})
export class PostsComponent implements OnInit {
    posts: Post[] = [];

    constructor(private _postService: PostService) {
    }

    ngOnInit() {
        this._postService.getPosts()
            .subscribe(posts =>	this.posts = posts);
    }
}