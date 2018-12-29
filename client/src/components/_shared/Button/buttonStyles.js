import {
  redColor,
  redColorHover,
  whiteColor,
  blueColor,
  blueColorHover
} from "../../../assets/jss/variables";

export default {
  red: {
    color: whiteColor,
    backgroundColor: redColor,
    "&:hover": {
      backgroundColor: redColorHover
    }
  },

  blue: {
    color: whiteColor,
    backgroundColor: blueColor,
    "&:hover": {
      backgroundColor: blueColorHover
    }
  }
};
