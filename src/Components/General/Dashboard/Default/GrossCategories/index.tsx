import React, { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import DataTable from "react-data-table-component";
import { GrossCategoriesType } from "@/Types/DashboardType";
import { grossCategoriesColumns, grossCategoriesData, MonthlyDropdownList } from "@/Data/General/Dashboard/DashboardData";
import { DropdownWithHeader } from "../../Common/DropdownWithHeader";
import { GrossCategoriesTitle } from "@/Constant/constant";
import FilterComponent from "../../Common/FilterComponent";

const GrossCategories = () => {
  const [filterText, setFilterText] = useState("");
  const filteredItems: GrossCategoriesType[] = grossCategoriesData.filter((item: GrossCategoriesType) => {
    return Object.values(item).some((value) => value && value.toString().toLowerCase().includes(filterText.toLowerCase()));
  });
  return (
    <Col xl={7} className="box-col-12">
      <Card>
        <DropdownWithHeader headerClass="pb-0" heading={GrossCategoriesTitle} dropDownClass="icon-dropdown" dropDownIcon dropDownList={MonthlyDropdownList} />
        <CardBody className="px-0 report">
          <div className="table-responsive custom-scrollbar">
            <div className="dataTables_wrapper no-footer">
              <div className="dataTables_filter">
                <FilterComponent onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} filterText={filterText} />
              </div>
              <DataTable data={filteredItems} columns={grossCategoriesColumns} className="display" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default GrossCategories;
