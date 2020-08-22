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
    name: "Status",
    prop: "status",
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
  description: {
    value: "",
    required: false,
    label: "Description",
    type: "text",
  },
  status: "Pending",
};
export const thingFormKeys = Object.keys(thingForm).filter(
  (t) => t !== "status"
);

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
// Things to delete when finished proyect...
export const dummyTasks = [
  {
    thing: {
      value: "Clean the House",
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
    description: {
      value: "",
      required: false,
      label: "Description",
      type: "text",
    },
    status: "Pending",
  },
  {
    thing: {
      value: "Exercise",
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
    description: {
      value: "",
      required: false,
      label: "Description",
      type: "text",
    },
    status: "Pending",
  },
  {
    thing: {
      value: "Breakfast",
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
    description: {
      value: "",
      required: false,
      label: "Description",
      type: "text",
    },
    status: "Pending",
  },
  {
    thing: {
      value: "Shower",
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
    description: {
      value: "",
      required: false,
      label: "Description",
      type: "text",
    },
    status: "Pending",
  },
];
