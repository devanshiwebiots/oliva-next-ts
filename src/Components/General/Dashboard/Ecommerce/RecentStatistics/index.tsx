import React from 'react'
import { Card, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader'
import { RecentStatisticsTitle } from '@/Constant/constant'
import { MonthlyDropdownList, optionsRevenue } from '@/Data/General/Dashboard/DashboardData'

const RecentStatistics = () => {
    return (
        <Col xl={4} sm={6}>
            <Card>
                <DropdownWithHeader headerClass='pb-0' heading={RecentStatisticsTitle}
                    dropDownClass='icon-dropdown' dropDownIcon dropDownList={MonthlyDropdownList} />
                <div className="card-body p-0">
                    <div id="revenueChart">
                        <ReactApexChart type='line' options={optionsRevenue} series={optionsRevenue.series} height={358} />
                    </div>
                </div>
            </Card>
        </Col>
    )
}
export default RecentStatistics;