import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersComponent } from "./components/users/users.component";
import { PostsComponent } from "./components/posts/posts.component";
import { CommentsComponent } from "./components/comments/comments.component";

@NgModule({
    declarations: [
        UsersComponent,
        PostsComponent,
        CommentsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        UsersComponent,
        PostsComponent,
        CommentsComponent
    ]
})
export class SecondModule {}