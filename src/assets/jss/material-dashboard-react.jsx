/*!

 =========================================================
 * Material Dashboard React - v1.2.0 based on Material Dashboard - v1.2.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2018 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto"
};

const boxShadow = {
  boxShadow:
    "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
  borderRadius: "3px",
  color: "rgba(0, 0, 0, 0.87)",
  background: "#3A4056"
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};

const darkGreyColor = "#444D66";
const whiteColor = "#ffffff";
const primaryColor = "#00FFBB";
const warningColor = "#ff9800";
const dangerColor = "#f44336";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const grayColor = "#999999";

const primaryBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(0,255,187, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0,255,187, 0.2)"
};
const blueBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(13,115,220, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(13,115,220, 0.2)"
};
const turquoiseBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(0,186,182, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0,186,182, 0.2)"
};
const purpleBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(109,5,202, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(109,5,202, 0.2)"
};
const infoBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"
};
const successBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(0,255,187, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0,255,187, 0.2)"
};
const warningBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"
};
const dangerBoxShadow = {
  boxShadow:
    "0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"
};

const orangeCardHeader = {
  background: "linear-gradient(60deg, #FF8A48, #FFD100)",
};
const greenCardHeader = {
  background: "linear-gradient(60deg, #00E981, #00FFBB)",
  ...primaryBoxShadow
};
const turquoiseCardHeader = {
  background: "linear-gradient(60deg, #00BAB6, #07fffa)",
  ...turquoiseBoxShadow
};
const blueCardHeader = {
  background: "linear-gradient(60deg, #0D73DC , #00A7FF)",
  ...blueBoxShadow
};
const pinkCardHeader = {
  background: "linear-gradient(60deg, #D00077, #FF0197)",
};
const purpleCardHeader = {
  background: "linear-gradient(60deg, #6D05CA, #AB16F5)",
  ...purpleBoxShadow
};
const greyCardHeader={
  background: "#3A4056"
}
const cardActions = {
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid #eeeeee",
  height: "auto",
  ...defaultFont
};
const cardHeaderNoMargin = {
  margin: "15px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};

const cardHeaderBold= {
  margin: "-20px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};
const cardHeader = {
  margin: "-20px 15px 0",
  borderRadius: "3px",
  padding: "4px"
};

const defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow:
    "0 10px 20px -12px rgba(0, 0, 0, 0.42), 0 3px 20px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};

export {
  //variables
  drawerWidth,
  transition,
  container,
  boxShadow,
  card,
  defaultFont,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  whiteColor,
  darkGreyColor,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  purpleBoxShadow,
  blueBoxShadow,
  turquoiseBoxShadow,
  orangeCardHeader,
  turquoiseCardHeader,
  greenCardHeader,
  pinkCardHeader,
  blueCardHeader,
  purpleCardHeader,
  greyCardHeader,
  cardActions,
  cardHeader,
  cardHeaderNoMargin,
  cardHeaderBold,
  defaultBoxShadow
};
