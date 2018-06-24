// ##############################
// // // RegularCard styles
// #############################

import {
  card,
  cardHeaderBold,
  defaultFont,
  turquoiseCardHeader,
  greenCardHeader,
  pinkCardHeader,
  orangeCardHeader,
  blueCardHeader,
  greyCardHeader,
  purpleCardHeader,
} from "assets/jss/material-dashboard-react.jsx";

const regularCardStyle = {
  card,
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardHeader: {
    maxWidth: "350px",
    ...cardHeaderBold,
    ...defaultFont
  },
  cardPlainHeader: {
    marginLeft: 0,
    marginRight: 0
  },
  turquoiseCardHeader,
  greenCardHeader,
  pinkCardHeader,
  orangeCardHeader,
  blueCardHeader,
  purpleCardHeader,
  greyCardHeader,
  cardTitle: {
    color: "#FFFFFF",
    marginTop: "0",
    marginBottom: "5px",
    ...defaultFont,
    fontSize: "24px",
    fontWeight: "500"
  },
  cardSubtitle: {
    ...defaultFont,
    marginBottom: "0",
    color: "rgba(255, 255, 255, 0.62)",
    margin: "0 0 10px"
  },
  cardActions: {
    padding: "14px",
    display: "block",
    height: "auto"
  }
};

export default regularCardStyle;
