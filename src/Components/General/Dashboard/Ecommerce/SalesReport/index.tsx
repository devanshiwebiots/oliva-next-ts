import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader'
import { SalesReportTitle } from '@/Constant/constant'
import { groupChartOption, MonthlyDropdownList } from '@/Data/General/Dashboard/DashboardData'

const SalesReport = () => {
    return (
        <Col md={6} className="box-col-8e">
            <Card>
                <DropdownWithHeader headerClass='pb-0' heading={SalesReportTitle}
                    dropDownClass='icon-dropdown' dropDownIcon dropDownList={MonthlyDropdownList} />
                <CardBody className="position-relative p-0">
                    <div className="group-legend">
                        <ul>
                            <li className="me-3">
                                <div className="circle bg-primary me-1" /><span>Sales Account</span>
                            </li>
                            <li>
                                <div className="circle bg-secondary me-1" /><span>General Leads </span>
                            </li>
                        </ul>
                    </div>
                    <div id="groupBarChart">
                        <ReactApexChart type='bar' options={groupChartOption} series={groupChartOption.series} height={325} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default SalesReport;