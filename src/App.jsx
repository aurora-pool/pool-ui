import update from 'immutability-helper';
import React from "react";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { withStyles } from "material-ui";

import { Header, Footer, Sidebar } from "components";

import dashboardRoutes from "routes/dashboard.jsx";

import appStyle from "assets/jss/material-dashboard-react/appStyle.jsx";

import image from "assets/img/aurora.jpg";
import logo from "assets/img/reactlogo.png";

class App extends React.Component {
  state = {
    mobileOpen: false,
    stats: {
      "global:stats": {},
      "pool:stats": {}
    }
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/maps";
  }
  componentDidMount() {
    const url = 'wss://api.aurorapool.io/api/v1/ws';
    const connection = new WebSocket(url);

    connection.onmessage = (msg) => {

      const message = JSON.parse(msg.data)

      let updateAction = { stats: {} }

      updateAction.stats[message['type']] = {
        $set: message['payload']
      }

      let newState = update(this.state, updateAction)
      this.setState(newState)
    }

    if(navigator.platform.indexOf('Win') > -1){
      // eslint-disable-next-line
      const ps = new PerfectScrollbar(this.refs.mainPanel);
    }
  }
  componentDidUpdate() {
    this.refs.mainPanel.scrollTop = 0;
  }
  render() {
    const switchRoutes = (
      <Switch>
        {dashboardRoutes.map((prop, key) => {
          if (prop.redirect)
            return <Redirect from={prop.path} to={prop.to} key={key} />;

          const element = React.createElement(prop.component, {
            key: key,
            stats: this.state.stats[prop.statsType]
          })

          const routerRender = () => element
          return <Route path={prop.path} key={key} render={routerRender} />;
        })}
      </Switch>
    )

    const { classes, ...rest } = this.props;
    return (
      <div className={classes.wrapper}>
        <Sidebar
          routes={dashboardRoutes}
          logoText={"Aurora Pool"}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          {...rest}
        />
        <div className={classes.mainPanel} ref="mainPanel">
          <Header
            routes={dashboardRoutes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          {/* On the /maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
          {this.getRoute() ? (
            <div className={classes.content}>
              <div className={classes.container}>{switchRoutes}</div>
            </div>
          ) : (
            <div className={classes.map}>{switchRoutes}</div>
          )}
          {this.getRoute() ? <Footer /> : null}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(App);
