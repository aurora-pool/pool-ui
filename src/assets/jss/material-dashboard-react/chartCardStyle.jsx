// ##############################
// // // ChartCard styles
// #############################

import {
  card,
  cardHeaderNoMargin,
  defaultFont,
  turquoiseCardHeader,
  greenCardHeader,
  pinkCardHeader,
  orangeCardHeader,
  blueCardHeader,
  purpleCardHeader,
  greyCardHeader,
  cardActions,
  grayColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  primaryColor,
  roseColor
} from "assets/jss/material-dashboard-react.jsx";

const chartCardStyle = {
  card,
  cardHeader: {
    ...cardHeaderNoMargin,
    padding: "0",
    minHeight: "160px",
    ...defaultFont
  },
  grayColor,
  turquoiseCardHeader,
  greenCardHeader,
  pinkCardHeader,
  orangeCardHeader,
  blueCardHeader,
  purpleCardHeader,
  greyCardHeader,
  cardContent: {
    padding: "15px 20px"
  },
  cardTitle: {
    marginTop: "0",
    marginBottom: "5px",
    color: "white",
    ...defaultFont,
    fontSize: "24px",
    fontWeight: "500"
  },
  cardCategory: {
    marginBottom: "0",
    color: "white",
    ...defaultFont,
    fontSize: "0.9em"
  },
  cardActions: {
    ...cardActions,
    padding: "0!important"
  },
  cardStats: {
    lineHeight: "22px",
    color: grayColor,
    fontSize: "12px",
    display: "inline-block",
    margin: "0!important"
  },
  cardStatsIcon: {
    position: "relative",
    top: "4px",
    width: "16px",
    height: "16px"
  },
  warningCardStatsIcon: {
    color: warningColor
  },
  primaryCardStatsIcon: {
    color: primaryColor
  },
  dangerCardStatsIcon: {
    color: dangerColor
  },
  successCardStatsIcon: {
    color: successColor
  },
  infoCardStatsIcon: {
    color: infoColor
  },
  roseCardStatsIcon: {
    color: roseColor
  },
  grayCardStatsIcon: {
    color: grayColor
  },
  cardStatsLink: {
    color: primaryColor,
    textDecoration: "none",
    ...defaultFont
  }
};

export default chartCardStyle;
