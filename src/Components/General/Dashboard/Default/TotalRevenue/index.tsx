import React from 'react'
import { Card, CardBody, CardHeader, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { OverviewGrowthTitle } from '@/Constant/constant'
import { revenueChart } from '@/Data/General/Dashboard/DashboardData'

const TotalRevenue = () => {
    return (
        <Col xl={5} md={6} className="box-col-6">
            <Card className="total-revenue">
                <CardHeader className="pb-0">
                    <div className="header-top">
                        <h4>{OverviewGrowthTitle}</h4>
                    </div>
                </CardHeader>
                <CardBody className="position-relative p-0">
                    <div className="revenue-legend">
                        <ul>
                            <li className="me-2">
                                <div className="circle bg-primary me-1"> </div><span>Earning</span>
                            </li>
                            <li>
                                <div className="circle bg-secondary me-1"></div><span>Expense </span>
                            </li>
                        </ul>
                    </div>
                    <div className="revenue-chart" id="revenue-chart">
                        <ReactApexChart type='bar' options={revenueChart} series={revenueChart.series} height={330} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default TotalRevenue;