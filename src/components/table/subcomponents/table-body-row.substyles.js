import { StyleSheet } from "aphrodite";
import { growEffect } from "../../../assets/globalStyles";


export const tableBodyRowStyles = (isLate)=> StyleSheet.create({
    tBodyTr: {
      backgroundColor:isLate?'#ff000066':'transparent',
      textAlign:'left',
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
      fontSize:20,
      '@media (max-width:1000px)':{
        fontSize:15
      }
    },
 
    delete:{
      color:'red',
      ":hover":{
        ...growEffect.hover
      }
    }
})