import {Component, OnInit} from "@angular/core";

import {PostService} from './post.service';
import {Post, Comment} from "./post";
import {SpinnerComponent} from "../utils/spinner.component";
import {Observable} from "rxjs/Rx";
import {User} from "../user/user";
import {UserService} from "../user/user.service";

@Component({
    templateUrl: 'app/templates/posts.html',
    providers: [PostService, UserService],
    directives: [SpinnerComponent]
})
export class PostsComponent implements OnInit {
    posts: Post[] = [];
    users: User[] = [];
    isLoading = true;
    currentPost;
    selectedUser = "";
    comments: Observable<Comment[]>;

    constructor(private _postService: PostService,
                private _userService: UserService) {
    }

    ngOnInit() {
        this._postService.getPosts()
            .subscribe(posts =>
                this.posts = posts,
                null,
                () => this.isLoading = false
            );
        this._userService.getUsers().subscribe(u=>this.users = u);
    }

    select(post: Post){
        this.comments = post.comments();
        this.currentPost = post;
    }

    reloadPosts(event){
        console.log(event);
    }
}