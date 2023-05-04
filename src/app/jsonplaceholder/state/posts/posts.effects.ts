import { Location } from "@angular/common";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { switchMap, map, catchError, tap } from "rxjs/operators";
import * as PostsActions from "./posts.actions";
import { PostsService } from "../../services/posts.service";

@Injectable()
export class PostsEffects {
  constructor(
    private router: Router,
    private actions$: Actions<any>,
    private apiService: PostsService,
    private location: Location
  ) {}

  fetchMenus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.postApiLoaded.type),
      switchMap(() =>
      {
        debugger
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
