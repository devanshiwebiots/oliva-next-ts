import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader'
import { TotalEarningTitle } from '@/Constant/constant'
import { goalOverviewChart, MonthlyDropdownList } from '@/Data/General/Dashboard/DashboardData'

const GoalOverviewSec = () => {
    return (
        <Col xl={3} md={6} className="box-col-6">
            <Card className="goal-overview-sec">
                <DropdownWithHeader headerClass='pb-0' heading={TotalEarningTitle}
                    dropDownClass='icon-dropdown' dropDownIcon dropDownList={MonthlyDropdownList} />
                <CardBody>
                    <div className="goal-chart-block">
                        <div id="goal-overview-chart">
                            <ReactApexChart type='radialBar' options={goalOverviewChart} series={goalOverviewChart.series} height={390} />
                        </div>
                        <div className="highest-goal">
                            <span>$3.9k</span>
                            <p>Highest</p>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default GoalOverviewSec;