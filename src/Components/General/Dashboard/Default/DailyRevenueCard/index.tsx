import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader'
import { admissionRatioOption, MonthlyDropdownList } from '@/Data/General/Dashboard/DashboardData'
import { NewOrdersTitle } from '@/Constant/constant'
import SVG from '@/CommonComponent/SVG/Svg'

const DailyRevenueCard = () => {
    return (
        <Col xl={3} lg={3} md={4} sm={6} className="box-col-3">
            <Card>
                <DropdownWithHeader headerClass='card-no-border pb-0' topDivClass='daily-revenue-card' heading={NewOrdersTitle}
                    dropDownClass='icon-dropdown' dropDownIcon dropDownList={MonthlyDropdownList} />
                <CardBody className="pb-0 total-sells">
                    <div className="d-flex align-items-center gap-3">
                        <div className="flex-shrink-0 bg-light-primary">
                            <SVG iconId='order-product' />
                        </div>
                        <div className="flex-grow-1">
                            <div className="d-flex align-items-center gap-2">
                                <h2>{'12,463'}</h2>
                                <div className="d-flex total-icon">
                                    <p className="mb-0 up-arrow bg-light-success">
                                        <i className="fa fa-arrow-up text-success" />
                                    </p>
                                    <span className="f-w-500 font-success">{'+ 5.8% '}</span>
                                </div>
                            </div>
                            <p className="text-truncate">{'In contrast to Jan 2024'}</p>
                        </div>
                    </div>
                    <div id="admissionRatio">
                        <ReactApexChart type='area' options={admissionRatioOption} series={admissionRatioOption.series} height={115} />
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default DailyRevenueCard;