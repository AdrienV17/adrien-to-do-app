import { all, call, put } from "redux-saga/effects";
import {
  sagaFunction,
  payloadAction,
  errorNotification,
  plainAction,
} from "../../assets/functions";
import { userTypes } from "./user.types";
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  locateUser,
  storage,
} from "../../firebase/firebase.utils";

// General Functions
export function* getSnapshotFromUserAuth(user, additionalData) {
  try {
    const userRef = yield call(createUserProfileDocument, user, additionalData);
    const userSnapShot = yield userRef.get();
    yield put(
      payloadAction(userTypes.SIGN_IN_SUCCESS, {
        id: userSnapShot.id,
        ...userSnapShot.data(),
      })
    );
  } catch ({ message }) {
    yield errorNotification("Saga Error", message);
    yield put(plainAction(userTypes.SIGN_IN_FAILURE, message));
  }
}
export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch ({ message }) {
    yield put(plainAction(userTypes.SIGN_IN_FAILURE, message));
    yield errorNotification("Saga Error", message);
  }
}

// Sign In

export function* signIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch ({ message }) {
    yield errorNotification("Saga Error", message);
    yield put(plainAction(userTypes.SIGN_IN_FAILURE, message));
  }
}

// Sign Up

export function* signUp({ payload: { email, password, name } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(
      payloadAction(userTypes.SIGN_UP_SUCCESS, {
        user,
        additionalData: { name },
      })
    );
  } catch ({ message }) {
    yield errorNotification("Saga Error", message);
    yield put(plainAction(userTypes.SIGN_UP_FAILURE, message));
  }
}
export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

// Sign Out
export function* signOut() {
  yield auth.signOut();
}

// Add Thing to do

export function* addThingToDo({ payload: { userId, thingToDo } }) {
  try {
    const userRef = yield locateUser(userId);
    const snapShot = yield userRef.get();
    const data = yield snapShot.data();
    if(thingToDo.image){
      const image = yield addThingToDoImage(userId,thingToDo);
      thingToDo.image = image;
    }
    const thingsToDo = yield [...data.thingsToDo, thingToDo];
    yield userRef.set({
      ...data,
      thingsToDo,
    });
    yield put(plainAction(userTypes.ADD_THING_TO_DO_SUCCESS, { thingsToDo }));
  } catch ({ message }) {
    yield errorNotification("Saga Error", message);
    yield put(plainAction(userTypes.SIGN_UP_FAILURE, message));
  }
}
// Remove thing to do

export function* removeThingToDo({ payload: { userId, thingToDo } }) {
  try {
    const userRef = yield locateUser(userId);
    const snapShot = yield userRef.get();
    const data = yield snapShot.data();
    const thingsToDo = yield data.thingsToDo.filter(
      (t) => t.thing.value !== thingToDo.thing.value
    );
    yield userRef.set({
      ...data,
      thingsToDo,
    });
    yield put(
      plainAction(userTypes.REMOVE_THING_TO_DO_SUCCESS, { thingsToDo })
    );
  } catch ({ message }) {
    yield errorNotification("Saga Error", message);
    yield put(plainAction(userTypes.REMOVE_THING_TO_DO_FAILURE, message));
  }
}

// Add Thing to do Image

export function* addThingToDoImage(userId, formState) {
  try {
    yield put(plainAction(userTypes.SET_IMAGE_START))
    const storageRef = yield storage
      .ref()
      .child(`${userId}/${formState.thing.value}/${formState.image.name}`);
    const documentUploaded = yield storageRef.put(formState.image);
    let url;
    documentUploaded.on(
      "state_changed",
      () => {},
      ({ message }) => {
        errorNotification("Storage Error", message);
      },
      async () => {
        url = await storageRef
          .child(`${userId}/${formState.thing.value}/${formState.image.name}`)
          .getDownloadURL();
      }
    );
      yield put(plainAction(userTypes.SET_IMAGE_SUCESS))
    return url;
  
  } catch ({ message }) {
    yield errorNotification("Saga Error", message);
    yield put(plainAction(userTypes.SET_IMAGE_FAILURE, message));
  }
}
export function* userSagas() {
  yield all([
    call(sagaFunction(userTypes.SIGN_UP_START, signUp)),
    call(sagaFunction(userTypes.SIGN_UP_SUCCESS, signInAfterSignUp)),
    call(sagaFunction(userTypes.SIGN_IN_EMAIL_START, signIn)),
    call(sagaFunction(userTypes.CHECK_USER_SESSION, isUserAuthenticated)),
    call(sagaFunction(userTypes.SIGN_OUT, signOut)),
    call(sagaFunction(userTypes.ADD_THING_TO_DO_START, addThingToDo)),
    call(sagaFunction(userTypes.REMOVE_THING_TO_DO_START, removeThingToDo)),
  ]);
}
