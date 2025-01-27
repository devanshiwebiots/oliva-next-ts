import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { totalSaleData } from '@/Data/General/Dashboard/DashboardData'
import SVG from '@/CommonComponent/SVG/Svg'

const TotalSale = () => {
    return (
        <>
            {totalSaleData.map((item) => (
                <Col xl={3} sm={6} key={item.id}>
                    <Card className={item.id === 2 ? 'overflow-hidden' : ''}>
                        <CardBody className={`total-sale px-0 ${item.id === 2 ? 'visitor' : ''}`}>
                            <div className="d-flex align-items-center gap-2">
                                <div className={`bg-icon bg-light-${item.color}`}>
                                    <div className={`flex-shrink-0 bg-light-${item.color}`}>
                                        <SVG iconId={item.icon} />
                                    </div>
                                </div>
                                <div className="flex-grow-1">
                                    <div className="d-flex align-items-center">
                                        <h2>${item.rate}</h2>
                                        <span className="text-truncate">{item.title}</span>
                                        <div className="total-icon mt-1">
                                            <p className="mb-0 up-arrow bg-light-success me-1">
                                                <i className="fa fa-arrow-up text-success" />
                                            </p>
                                            <span className="f-w-500 font-success me-1">+ {item.percent}% </span>
                                            <h6>Than last week</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="total-sales">
                                <ReactApexChart options={item.chart} type={item.chart.type} series={item.chart.series} height={item.chart.height} />
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
export default TotalSale;