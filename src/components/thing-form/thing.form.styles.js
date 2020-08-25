import { StyleSheet } from "aphrodite";

export const thingFormStyles = StyleSheet.create({
  container: {},
  header: {
    margin: "20px 0",
  },
  headerTitle: { fontSize: 40 },
  form: {},
  flexContainer: {
    height: 300,
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },

  formInputs: {
    width: "100%",
    fontSize: 20,
    display: "grid",
    alignContent: "space-around",
  },

  formInput: {},
  image: {
    backgroundColor: "#cccccc99",
    padding: 20,
    borderRadius: 10,
    width: "40%",
  },
  formButtom: {
    textAlign: "center",
    margin: 10,
    fontSize: 15,
  },
});
