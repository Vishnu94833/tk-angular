import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { PostsService } from "src/app/jsonplaceholder/services/posts.service";
import * as PostsActions from "./posts.actions";

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions<any>,
    private apiService: PostsService,
  ) {}

  fetchMenus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.postApiLoaded.type),
      switchMap(() =>
      {
        return this.apiService.getPosts().pipe(
          map((posts) =>
          PostsActions.fetchPostsSuccess({ posts: posts })
          ),
          catchError((error) =>
            of(PostsActions.fetchPostsFailed({ error: error }))
          )
        )}
      )
    )
  );

  // addMenu$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(MenusActions.addMenuItemFormSubmitted.type),
  //     switchMap((action) => this.apiService.addItem(action.menuItem).pipe(
  //         tap(() => this.router.navigate(["/menu"])),
  //         map(() => MenusActions.addMenuItemSuccess()),
  //         catchError((error) =>
  //           of(MenusActions.addMenuItemFailed({ error: error }))
  //         )
  //       )
  //     )
  //   )
  // );

  // editMenu$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(MenusActions.editMenuItemFormSubmitted.type),
  //     switchMap((action) =>
  //       this.apiService.updateItem(action.menuItem).pipe(
  //         tap(() => this.location.back()),
  //         map(() =>
  //           MenusActions.editMenuItemSuccess({ menuItem: action.menuItem })
  //         ),
  //         catchError((error) =>
  //           of(MenusActions.editMenuItemFailed({ error: error }))
  //         )
  //       )
  //     )
  //   )
  // );

  // deleteMenu$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(MenusActions.deleteMenuItemInitiated.type),
  //     switchMap((action) =>
  //       this.apiService.deleteItem(action.menuId).pipe(
  //         tap(() => this.router.navigate(["/menu"])),
  //         map(() =>
  //           MenusActions.deleteMenuItemSuccess({ menuId: action.menuId })
  //         ),
  //         catchError((error) =>
  //           of(MenusActions.deleteMenuItemFailed({ error: error }))
  //         )
  //       )
  //     )
  //   )
  // );
}
