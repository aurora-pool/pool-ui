// ##############################
// // // Footer styles
// #############################

import { defaultFont, container, primaryColor, whiteColor } from "assets/jss/material-dashboard-react.jsx";

const footerStyle = {
  block: {
    color: "inherit",
    padding: "15px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
    ...defaultFont,
    fontWeight: "500",
    fontSize: "12px"
  },
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    padding: "15px 0",
    margin: "0",
    fontSize: "14px",
    float: "right!important"
  },
  middle: {
    display: "flex",
    justifyContent: "center",
    fontSize: "14px"
  },
  footer: {
    bottom: "0",
    borderTop: "1px solid #525D7C",
    padding: "15px 0",
    ...defaultFont,
    color: whiteColor
  },
  container,
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    paddingTop: "0px",
    width: 'auto'
  }
};
export default footerStyle;
