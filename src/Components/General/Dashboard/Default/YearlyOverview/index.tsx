import React from 'react'
import { CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader'
import { YearlyOverviewTitle } from '@/Constant/constant'
import { companyViewChart, MonthlyDropdownList } from '@/Data/General/Dashboard/DashboardData'

const YearlyOverview = () => {
    return (
        <Col xl={5} md={6} className="box-col-6">
            <div className="card">
                <DropdownWithHeader headerClass='pb-0' heading={YearlyOverviewTitle}
                    dropDownClass='icon-dropdown' dropDownIcon dropDownList={MonthlyDropdownList} />
                <CardBody className="p-0">
                    <div id="company-viewchart">
                        <ReactApexChart type='area' options={companyViewChart} series={companyViewChart.series} height={380} />
                    </div>
                </CardBody>
            </div>
        </Col>
    )
}
export default YearlyOverview;