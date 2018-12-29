import { whiteColor } from "../../assets/jss/variables";

export default {
  welcome: {
    color: whiteColor,
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "30px",
    position: "relative",
    padding: "20px 10px 5px 30px",
    zIndex: "4",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",

      height: "1px",
      right: "15px",
      width: "calc(100% - 30px)",
      backgroundColor: "rgba(180, 180, 180, 0.3)"
    }
  }
};
