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

// Select isFetching

export const selectUserIsFetching = createSelector(
  [selectUserState],
  (user) => user.isFetching
);

// Select thingsToDoLength
export const selectUserThingsToDoLength = createSelector(
  [selectUserState],
  (user) => user.thingsToDo.length
);

// Select errorMessage

export const selectUserErrorMessage = createSelector(
  [selectUserState],
  user => user.errorMessage
)

// Select thingsToDoName

export const selectThingsToDoName = createSelector(
  [selectUserState],
  user=>user.thingsToDo.map(thingToDo=>thingToDo.thing.value)
)