import {Component, OnInit} from "@angular/core";

import {PostService} from './post.service';
import {Post, Comment} from "./post";
import {SpinnerComponent} from "../utils/spinner.component";
import {Observable} from "rxjs/Rx";
import {User} from "../user/user";
import {UserService} from "../user/user.service";
import {PaginationComponent} from "../utils/pagination.component";
import {PagingEntity} from "../hal.client/paging.entity";

@Component({
    templateUrl: 'app/templates/posts.html',
    providers: [PostService, UserService],
    directives: [SpinnerComponent, PaginationComponent]
})
export class PostsComponent implements OnInit {
    pagingEntity: PagingEntity<Post>;

    posts: Post[] = [];
    users: User[] = [];
    isLoading = true;
    currentPost;
    comments: Observable<Comment[]>;

    constructor(private _postService: PostService,
                private _userService: UserService) {
    }

    ngOnInit() {
        this.loadAllPosts();
        this._userService.getUsers().subscribe(u=>this.users = u);
    }

    select(post: Post){
        this.comments = post.comments();
        this.currentPost = post;
    }

    reloadPostsForUser(user){
        this.isLoading = true;
        if(!user){
            this.loadAllPosts();
            return;
        }

        this._postService.getByUser(user)
            .subscribe(posts =>{
                this.pagingEntity = posts;
                this.posts = posts.list;
            },
                error=>console.log(error),
                () => this.isLoading = false
            );
    }

    loadAllPosts() {
        this._postService.getPosts()
            .subscribe(posts =>{
                    this.pagingEntity = posts;
                    this.posts = posts.list;
                },
                null,
                () => this.isLoading = false
            );
    }

    onPageChanged(posts: Post[]){
        this.isLoading = false;
        this.posts = posts;
    }

    postsLoading(){
        this.isLoading = true;
    }
}