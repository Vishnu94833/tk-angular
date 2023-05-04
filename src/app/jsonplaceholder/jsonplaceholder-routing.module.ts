import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './components/root.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      { path: '', redirectTo: '/posts', pathMatch: 'full' },
      {
        path: 'posts',
        loadChildren: () =>
          import('./components/posts/posts.module').then((m) => m.PostsModule),
      },
      {
        path: 'comments',
        loadChildren: () =>
          import('./components/comments/comments.module').then(
            (m) => m.CommentsModule
          ),
      },
      {
        path: 'todos',
        loadChildren: () =>
          import('./components/todos/todos.module').then((m) => m.TodosModule),
      },
      {
        path: 'comments',
        loadChildren: () =>
          import('./components/comments/comments.module').then(
            (m) => m.CommentsModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./components/users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsonplaceholderRoutingModule {}
