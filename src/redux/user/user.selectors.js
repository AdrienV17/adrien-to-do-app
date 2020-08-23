import { createSelector } from "reselect";
import { sortThingsToDoByDate } from "../../assets/functions";

// Select whole user state
const selectUserState = (state) => state.user;

// Select User Name
export const selectUserName = createSelector(
  [selectUserState],
  (user) => user.name
);
// Select user Id
export const selectUserId = createSelector(
  [selectUserState],
  (user) => user.id
);

// Select user thingsToDo
export const selectUserThingsToDo = createSelector([selectUserState], (user) =>
  sortThingsToDoByDate(user.thingsToDo)
);

// Select thingsToDoLength 
export const selectUserThingsToDoLength = createSelector([selectUserState],user=> user.thingsToDo.length)