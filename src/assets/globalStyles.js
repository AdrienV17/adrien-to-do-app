export const cardStyle = {
  maxWidth: 1000,
  width: "70%",
  backgroundColor: "white",
  color: "black",
  borderRadius: 50,
  padding: "50px 100px",
  '@media (max-width:1000px)':{
    padding:'50px 25px',
    width:'90%',
    height: '90%',
    overflow: 'auto',
    
  }
};
export const goBackButton = {
  position: "absolute",
  right: 40,
  fontSize: 30,
  top: 20,
  transition: "0.3s",
  cursor: "pointer",
  backgroundColor:'#0000002b',
  padding:20,
  boxShadow:'10px 10px 5px 0px rgba(0,0,0,0.75)',
  borderRadius:50
};
export const customTextHover = {
  hover: {
    color: " rgb(139, 139, 139)",
  },
  active: {
    color: "rgb(61, 61, 61)",
  },
};
export const growEffect = {
  hover: {
    transform: "scale(1.1)",
  },
  active: {
    transform: "scale(0.8)",
  },
};
export const flex100Vh = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

export const hideScrollbar = {
  "::-webkit-scrollbar":{
    display:"none"
}
}
export const overflowAuto = {
  overflow:'auto',
    overflowStyle:'none',
    scrollbarWidth:'none',
    ...hideScrollbar
}
