import { Action, createReducer, on } from "@ngrx/store";
// import * as MenusActions from "./posts.actions";
import { PostsState, initialState,  } from "./posts.state";
import { PostsActions } from "./posts.actions";

const menusReducer = createReducer(
	initialState,
	on(PostsActions.fetchPostsSuccess, (state, { posts }) => {
    return ({
		...state,
		posts: posts,
	})}),
	// on(MenusActions.editMenuItemSuccess, (state, { menuItem }) => {
	// 	const menuItemIndex = state.menuItems.findIndex(
	// 		(item) => item.id === menuItem.id
	// 	);
	// 	const updatedMenuItems = [...state.menuItems];
	// 	updatedMenuItems[menuItemIndex] = menuItem;
	// 	return {
	// 		...state,
	// 		menuItems: updatedMenuItems,
	// 	};
	// }),
	// on(MenusActions.deleteMenuItemSuccess, (state, { menuId }) => {
	// 	const menuItemIndex = state.menuItems.findIndex(
	// 		(item) => item.id === menuId
	// 	);
	// 	const updatedMenuItems = [...state.menuItems];
	// 	updatedMenuItems.splice(menuItemIndex, 1);
	// 	return {
	// 		...state,
	// 		menuItems: updatedMenuItems,
	// 	};
	// })
);

export function reducer(state: PostsState | undefined, action: Action) {
	return menusReducer(state, action);
}
