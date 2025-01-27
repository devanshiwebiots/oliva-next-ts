import { TotalEarningCardProp } from "@/Types/DashboardType";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { DropdownWithHeader } from "../../../Dashboard/Common/DropdownWithHeader";
import { Due, InvoicesTitle, Overdue } from "@/Constant/constant";
import { invoicesCard, MonthlyDropdownList } from "@/Data/General/Dashboard/DashboardData";
import ReactApexChart from "react-apexcharts";

export const InvoicesCard: React.FC<TotalEarningCardProp> = ({ colClass }) => {
  return (
    <Col xl="12" className={colClass}>
      <Card className="invoices">
        <DropdownWithHeader headerClass="pb-0" heading={InvoicesTitle} dropDownList={MonthlyDropdownList} dropDownClass="icon-dropdown" dropDownIcon={true} />
        <CardBody>
          <div id="client">
            <ReactApexChart options={invoicesCard} series={invoicesCard.series} type="line" height={70} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
