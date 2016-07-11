import {Component, OnInit} from "@angular/core";

import {PostService} from './post.service';
import {Post} from "./post";
import {SpinnerComponent} from "../utils/spinner.component";

@Component({
    templateUrl: 'app/templates/posts.html',
    providers: [PostService],
    directives: [SpinnerComponent]
})
export class PostsComponent implements OnInit {
    posts: Post[] = [];
    isLoading = true;
    currentPost;

    constructor(private _postService: PostService) {
    }

    ngOnInit() {
        this._postService.getPosts()
            .subscribe(posts =>
                this.posts = posts,
                null,
                () => this.isLoading = false
            );
    }

    select(post: Post){
        this.currentPost = post;
    }
}