import { StyleSheet } from "aphrodite";
import { growEffect } from "../../../assets/globalStyles";


export const tableBodyRowStyles = StyleSheet.create({
    tBodyTr: {
        height:75,
        borderBottom:'2px dashed gray',
        transition:'0.3s',
        cursor:'pointer',
        ":hover": {
          ...growEffect.hover,
        },
      
    },
    tBodyTd: {
      paddingLeft:10,
      fontSize:20
    },
 
    delete:{
      color:'red',
      ":hover":{
        ...growEffect.hover
      }
    }
})