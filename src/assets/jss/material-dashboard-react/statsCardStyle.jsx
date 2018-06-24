// ##############################
// // // StatsCard styles
// #############################

import {
  card,
  cardHeader,
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

const statsCardStyle = {
  card,
  cardHeader: {
    ...cardHeader,
    float: "left",
    textAlign: "center"
  },
  turquoiseCardHeader,
  greenCardHeader,
  pinkCardHeader,
  orangeCardHeader,
  blueCardHeader,
  purpleCardHeader,
  cardContent: {
    color: "white",
    textAlign: "right",
    paddingTop: "10px",
    padding: "15px 20px"
  },
  cardIcon: {
    width: "40px",
    height: "36px",
    fill: "#fff"
  },
  cardAvatar: {
    margin: "8px"
  },
  cardCategory: {
    marginBottom: "0",
    color: grayColor,
    margin: "0 0 10px",
    ...defaultFont
  },
  cardTitle: {
    margin: "0",
    color: "white",
    ...defaultFont,
    fontSize: "28px",
    fontWeight: "500"
  },
  cardTitleSmall: {
    fontSize: "65%",
    fontWeight: "400",
    lineHeight: "1",
    color: "rgba(255, 255, 255, 0.8)"
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

export default statsCardStyle;
