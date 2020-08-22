import { takeLatest } from "redux-saga/effects";



export const getFullStringDate = (date=new Date())=>`${date.getFullYear()}-${esteticNum(date.getMonth()+1)}-${esteticNum(date.getDate())}`
export const getFullStringTime = (date=new Date()) =>`${esteticNum(date.getHours())}:${esteticNum(date.getMinutes())}`


export const esteticNum = (num)=>num<10?`0${num}`:num 

export const typeAction = type=>({type})

export const payloadAction = (type,payload) =>({type,payload})

export const sagaFunction = (type,func) => function*(){
  yield takeLatest(type,func);
}

export const errorNotification = (errorTitle,errorMessage,screenMessage='There was a Problem, try again...') =>{
  console.log(errorTitle,errorMessage);
}