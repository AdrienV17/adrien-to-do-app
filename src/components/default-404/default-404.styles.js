import { StyleSheet } from "aphrodite";
import { flex100Vh } from "../../assets/globalStyles";

export const default404Styles = StyleSheet.create({
    container:{
        ...flex100Vh,
        height:'unset'
    },
    title:{
        fontSize:40
    },
    subtitle:{fontSize:20},
})