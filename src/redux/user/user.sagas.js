import { all, call, put } from "redux-saga/effects";
import {
  sagaFunction,
  payloadAction,
  errorNotification,
} from "../../assets/functions";
import { userTypes } from "./user.types";
import { auth, createUserProfileDocument,getCurrentUser } from "../../firebase/firebase.utils";

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
    yield put(userTypes.SIGN_IN_FAILURE)
  }
}
export function* signIn({payload:{email,password}}){
    try {
        const {user}= yield auth.signInWithEmailAndPassword(email,password);
       yield  getSnapshotFromUserAuth(user)
    } catch ({message}) {
        yield errorNotification('Saga Error',message)
       yield put(userTypes.SIGN_IN_FAILURE)
    }
}
export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch ({message}) {
    yield put(payloadAction(userTypes.SIGN_IN_FAILURE,message));
    yield errorNotification('Saga Error',message)
  }
}
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
    yield put(userTypes.SIGN_UP_FAILURE)
  }
}
export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}
export function* signOut(){
  yield auth.signOut();
}
export function* userSagas() {
  yield all([
    call(sagaFunction(userTypes.SIGN_UP_START, signUp)),
    call(sagaFunction(userTypes.SIGN_UP_SUCCESS, signInAfterSignUp)),
    call(sagaFunction(userTypes.SIGN_IN_EMAIL_START, signIn)),
    call(sagaFunction(userTypes.CHECK_USER_SESSION, isUserAuthenticated)),
    call(sagaFunction(userTypes.SIGN_OUT, signOut)),
  ]);
}
