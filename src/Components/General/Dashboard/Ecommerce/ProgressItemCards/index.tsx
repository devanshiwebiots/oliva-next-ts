import React from 'react'
import { Badge, Card, CardBody, CardHeader, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { progressItemData } from '@/Data/General/Dashboard/DashboardData'
import SVG from '@/CommonComponent/SVG/Svg'

const ProgressItemCards = () => {
    return (
        <>
            {progressItemData.map((item) => (
                <Col xl={3} sm={6} key={item.id}>
                    <Card className="progress-items">
                        <CardHeader className="pb-0">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <div className="d-flex gap-2">
                                        <h5>{item.title}</h5>
                                        <Badge color={`light-${item.arrowColor}`} className={`align-items-center d-flex txt-${item.arrowColor}`}>
                                            <SVG className='feather me-1 pt-0' iconId={item.arrowIcon} />
                                            <span>{item.percent}%</span>
                                        </Badge>
                                    </div>
                                    <h3 className="mt-3">{item.rate}</h3>
                                </div>
                                <div className={`flex-shrink-0 bg-light-${item.color}`}>
                                    <SVG className={`svg-w-23 fill-${item.color}`} iconId={item.icon} />
                                </div>
                            </div>
                        </CardHeader>
                        <CardBody className="progress-card pt-0">
                            <div>
                                <p>{item.value}% since Last Month</p>
                            </div>
                            <div className="order-chart">
                                <div className="chart" id="sale-chart">
                                    <ReactApexChart options={item.chart} series={item.chart.series} height={item.chart.height} type={item.chart.type} />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </>
    )
}
export default ProgressItemCards;