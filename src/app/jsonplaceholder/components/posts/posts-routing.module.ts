import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsListComponent } from './posts-list/posts-list.component';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  { path: 'create', component: CreatePostComponent },
  { path: 'edit', component: EditPostComponent },
  { path: ':id', component: PostsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
