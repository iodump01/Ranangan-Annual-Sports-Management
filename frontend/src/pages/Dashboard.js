import React, { Fragment } from "react";
import "../App.css";
import CTA from "../components/CTA";
import Table from "../components/Table";
import tableData1 from "../tableData1.json";
import InfoCard from "../components/Cards/InfoCard";
import ChartCard from "../components/Chart/ChartCard";
import { Doughnut, Line } from "react-chartjs-2";
import ChartLegend from "../components/Chart/ChartLegend";
import PageTitle from "../components/Typography/PageTitle";
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from "../icons";
import RoundIcon from "../components/RoundIcon";

import { TableContainer } from "@windmill/react-ui";
import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from "../utils/demo/chartsData";

const columns = [
  { label: "Rank", accessor: "rank", sortable: true },
  { label: "Department", accessor: "department", sortable: true },
  { label: "Gold", accessor: "gold", sortable: true, sortbyOrder: "desc" },
  { label: "Silver", accessor: "silver", sortable: true,sortbyOrder: "desc" },
  { label: "Bronze", accessor: "bronze", sortable: true,sortbyOrder: "desc" },
  { label: "Total", accessor: "total", sortable: true,sortbyOrder: "desc" },
];


function Dashboard() {
  return (
    <Fragment>
      <PageTitle>Dashboard</PageTitle>
      <CTA />
      <section className="text-gray-600 dark:text-gray-400">
        Leaderboard department wise
      </section>
      <TableContainer class="w-full overflow-hidden rounded-lg shadow-xs mb-8">
        <Table
          className="w-full overflow-x-auto"
          data={tableData1}
          columns={columns}
        />
      </TableContainer>
      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total Participants" value="1400+">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Sports" value="17+">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Coordinators" value="100+">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="College" value="ZCOER">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <PageTitle>Statistics</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Participants">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Students">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div>
    </Fragment>
  );
}

export default Dashboard;
