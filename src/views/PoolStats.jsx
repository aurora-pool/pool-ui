import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  NetworkCheck,
  Dns,
  Devices,
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
  emailsSubscriptionChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";

class PoolStats extends React.Component {
  state = {
    stats: {
      name: "",
      poolAddress: "",
      averageHashrate: 0,
      totalClientCounts: 0,
      minersCount: 0,
      clientCounts: {
        unregistered: 0,
        smart: 0,
        nano: 0
        },
      poolFee: 0,
      numBlocksMined: 0,
      numIpsBanned: 0,
      totalShareDifficulty: 0,
      payoutConfirmations: 0,
      autoPayOutLimit: 0
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
              iconColor="green"
              title="Pool Hashrate"
              description={this.props.stats.averageHashrate}
              small="H"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Dns}
              iconColor="turquoise"
              title="Blocks Found"
              description={this.props.stats.numBlocksMined}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Mood}
              iconColor="blue"
              title="Miners"
              description={this.props.stats.minersCount}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Devices}
              iconColor="purple"
              title="Devices"
              description={this.props.stats.totalClientCounts}
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
              chartColor="grey"
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
              chartColor="grey"
              title="Blocks Found"
              text="per day"
              statIcon={AccessTime}
              statText="last block found 1 hour ago"
            />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              headerColor="purple"
              cardTitle="TOP miners"
              cardSubtitle="Miners are ranked based on their current hashrate"
              content={
                <Table
                  tableHeaderColor="white"
                  tableHead={["Address", "Hashrate", "Payouts"]}
                  tableData={[
                    ["NQ49 EDPF FSLR 2FMR 596R R7R7 LQH9 3YDH NN7M", "1 mh/s", "140,000 NIM"],
                    ["NQ49 EDPF FSLR 2FMR 596R R7R7 LQH9 3YDH NN7M", "540 kh/s", "140,000 NIM"],
                    ["NQ49 EDPF FSLR 2FMR 596R R7R7 LQH9 3YDH NN7M", "178 kh/s", "120,000 NIM"],
                    ["NQ49 EDPF FSLR 2FMR 596R R7R7 LQH9 3YDH NN7M", "39 kh/s", "10,000 NIM"]
                  ]}
                />
              }
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

PoolStats.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(PoolStats);
