"use client";
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { DashboardTitle, DefaultDashboardTitle, DefaultTitle } from "@/Constant/constant";
import React from "react";
import { Container, Row } from "reactstrap";
import WelcomeCard from "./WelcomeCard";
import DailyRevenueCard from "./DailyRevenueCard";
import NewCustomers from "./NewCustomers";
import GrossCategories from "./GrossCategories";
import TotalRevenue from "./TotalRevenue";
import YearlyOverview from "./YearlyOverview";
import NewsUpdate from "./NewsUpdate";
import GoalOverviewSec from "./GoalOverviewSec";
import TotalSale from "./TotalSale";
import SellingProduct from "./SellingProduct";

const DefaultDashboardContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={DefaultDashboardTitle} parent={DashboardTitle} title={DefaultTitle} />
      <Container className="default-dashboard" fluid>
        <Row>
          <WelcomeCard />
          <DailyRevenueCard />
          <NewCustomers />
          <GrossCategories />
          <TotalRevenue />
          <YearlyOverview />
          <NewsUpdate />
          <GoalOverviewSec />
          <TotalSale />
          <SellingProduct />
        </Row>
      </Container>
    </>
  );
};

export default DefaultDashboardContainer;
