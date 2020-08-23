import { takeLatest } from "redux-saga/effects";
import reduxStore from "../redux/store";

// Get full date and time (actual time as default...)
export const getFullStringDate = (date = new Date()) =>
  `${date.getFullYear()}-${esteticNum(date.getMonth() + 1)}-${esteticNum(
    date.getDate()
  )}`;
export const getFullStringTime = (date = new Date()) =>
  `${esteticNum(date.getHours())}:${esteticNum(date.getMinutes())}`;

// Add 0 to <10 numbers
export const esteticNum = (num) => (num < 10 ? `0${num}` : num);
// Redux Type-Only Action
export const typeAction = (type) => reduxStore.store.dispatch({ type });
// Redux Type-Payload Action
export const payloadAction = (type, payload) =>
  reduxStore.store.dispatch({ type, payload });
// Redux plain action object (without dispatch)
export const plainAction = (type,payload=null)=>({type,payload})
// Redux Saga Custom call function...
export const sagaFunction = (type, func) =>
  function* () {
    yield takeLatest(type, func);
  };

// Error notification...
export const errorNotification = (
  errorTitle,
  errorMessage,
  screenMessage = "There was a Problem, try again..."
) => {
  console.log(errorTitle, errorMessage);
};

// Get miliseconds date...
export const getMillisecondsDate = (date, time) =>
  new Date(`${date} ${time}`).getTime();
// Sort Things to do by day...

export const sortThingsToDoByDate = (thingsToDo) =>
  thingsToDo.sort(
    (a, b) =>
      getMillisecondsDate(a.dueDate.value, a.time.value) -
      getMillisecondsDate(b.dueDate.value, b.time.value)
  );
