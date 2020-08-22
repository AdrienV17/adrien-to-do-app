import { createSelector } from "reselect";



const selectUserState = state => state.user;


export const selectUserName = createSelector([selectUserState],user=> user.name)

export const selectUserId = createSelector([selectUserState],user=> user.id);
