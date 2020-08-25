import { getFullStringDate, getFullStringTime } from "./functions";

export const firebaseKey = JSON.parse(process.env.REACT_APP_FIREBASE_KEY);
export const thingsToDoHeader = [
  {
    name: "Thing",
    prop: "thing",
  },
  {
    name: "Due Date",
    prop: "dueDate",
  },
  {
    name: "Due Time",
    prop: "time",
  },
];

export const thingForm = {
  thing: {
    value: "",
    required: true,
    label: "Name",
    type: "text",
  },
  dueDate: {
    value: getFullStringDate(),
    required: false,
    label: "Due Date",
    type: "date",
  },
  time: {
    value: getFullStringTime(),
    required: false,
    label: "Time",
    type: "time",
  },


};
export const thingFormKeys = Object.keys(thingForm)

export const signInForm = {
  email: {
    label: "Email",
    required: true,
    value: "",
    type: "email",
  },
  password: {
    label: "Password",
    required: true,
    value: "",
    type: "password",
  },
};
export const signUpForm = { name: {
  label: "Name",
  required: true,
  value: "",
  type: "text",
},email: {
  label: "Email",
  required: true,
  value: "",
  type: "email",
},
password: {
  label: "Password",
  required: true,
  value: "",
  type: "password",
},};
export const socialMedia = [
  {
    icon:'fab fa-facebook-square',
    name:'Facebook',
    pageLink:'https://www.facebook.com/hernan.adrian1'
  },
  {
    icon:'fab fa-instagram',
    name:'Instagram',
    pageLink:'https://www.instagram.com/adrien_v17/'
  }, {
    icon:'fab fa-github',
    name:'Github',
    pageLink:'https://github.com/AdrienV17'

  },
]

