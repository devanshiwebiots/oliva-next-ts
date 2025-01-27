'use client'
import Breadcrumbs from "@/CommonComponent/Breadcrumb";
import { DashboardTitle, ECommerceTitle, EcommerceDashboardTitle } from "@/Constant/constant";
import React from "react";
import { Container, Row } from "reactstrap";
import ProgressItemCards from "./ProgressItemCards";
import FeedbackCard from "./FeedbackCard";
import ProductOrder from "./ProductOrder";
import NewOrder from "./NewOrder";
import UserActivity from "./UserActivity";
import Invoices from "./Invoices";
import RecentStatistics from "./RecentStatistics";
import NotificationsCard from "./NotificationsCard";
import SaleTopCountries from "./SaleTopCountries";
import ReviewSlider from "./ReviewSlider";
import SalesReport from "./SalesReport";

const EcommerceDashboardContainer = () => {
  return (
    <>
      <Breadcrumbs pageTitle={EcommerceDashboardTitle} parent={DashboardTitle} title={ECommerceTitle} />
      <Container fluid className="ecommerce-dashboard">
        <Row>
          <ProgressItemCards />
          <FeedbackCard />
          <ProductOrder />
          <NewOrder />
          <UserActivity />
          <Invoices />
          <RecentStatistics />
          <NotificationsCard />
          <SaleTopCountries />
          <ReviewSlider />
          <SalesReport />
        </Row>
      </Container>
    </>
  );
};

export default EcommerceDashboardContainer;
