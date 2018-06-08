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
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";

class PoolStats extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  componentDidMount() {
    fetch('https://www.aurorapool.io:8650/metrics').then((res) => {
      console.log(res)
    })
  }

  render() {
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={NetworkCheck}
              iconColor="orange"
              title="Pool Hashrate"
              description="375"
              small="KH"
              statIcon={Warning}
              statIconColor="danger"
              statLink={{ text: "Get More Space...", href: "#pablo" }}
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Dns}
              iconColor="green"
              title="Blocks Found"
              description="648"
              statIcon={DateRange}
              statText="Last 24 Hours"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Mood}
              iconColor="red"
              title="Miners"
              description="75"
              statIcon={LocalOffer}
              statText="Tracked from Github"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={3}>
            <StatsCard
              icon={Devices}
              iconColor="blue"
              title="Devices"
              description="+245"
              statIcon={Update}
              statText="Just Updated"
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
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12}>
            <RegularCard
              headerColor="purple"
              cardTitle="TOP miners"
              cardSubtitle="Miners are ranked based on their current hashrate"
              content={
                <Table
                  tableHeaderColor="warning"
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
