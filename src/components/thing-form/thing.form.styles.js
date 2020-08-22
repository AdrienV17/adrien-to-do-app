import { StyleSheet } from "aphrodite";

export const thingFormStyles = StyleSheet.create({
  container: {},
  header: {
      margin:'20px 0'
  },
  headerTitle: { fontSize: 40 },
  form: {
     
},
flexContainer:{
    height:300,
    display:"flex",
    justifyContent:"space-around",
    flexWrap:'wrap',
  },

  formInputs: {
    width:'40%',
    fontSize:20,
    display:"grid",
    alignContent:'space-around',
    
  },

  formInput: {

  },
  image: {
      padding:20,
      backgroundColor:'black',
      width:'40%'
  },
  formButtom:{
      textAlign:'center',
      margin:10,
      fontSize:15
      
  },

});
