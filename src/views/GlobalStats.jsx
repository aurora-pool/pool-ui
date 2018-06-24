import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  NetworkCheck,
  Dns,
  Devices,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Mood
} from "@material-ui/icons";
import { withStyles, Grid } from "material-ui";

import {
  StatsCard,
  ChartCard,
  RegularCard,
  Table,
  ItemGrid
} from "components";

import {
  dailySalesChart,
  emailsSubscriptionChart,
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";

class GlobalStats extends React.Component {

  state = {
    stats: {
      block_reward: 0,
      current_supply: 0,
      difficulty: 0,
      estimated_global_hashrate: 0,
      latest_block: 0
    }
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={NetworkCheck}
              iconColor="orange"
              title="Global Hashrate"
              description={this.props.stats.estimated_global_hashrate}
              small="H"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Dns}
              iconColor="green"
              title="Current Supply"
              description={this.props.stats.current_supply}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Mood}
              iconColor="red"
              title="Block Reward"
              description={this.props.stats.block_reward}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Devices}
              iconColor="blue"
              title="Max Supply"
              description={this.props.stats.maximum_supply}
            />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={6}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              }
              chartColor="green"
              title="Daily Hashrate"
              text={
                <span>
                  <span className={this.props.classes.successText}>
                    <ArrowUpward
                      className={this.props.classes.upArrowCardCategory}
                    />{" "}
                    55%
                  </span>{" "}
                  increase in hashrate today.
                </span>
              }
              statIcon={AccessTime}
              statText="updated 4 minutes ago"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              }
              chartColor="orange"
              title="Blocks Found"
              text="per day"
              statIcon={AccessTime}
              statText="last block found 1 hour ago"
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

GlobalStats.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(GlobalStats);
