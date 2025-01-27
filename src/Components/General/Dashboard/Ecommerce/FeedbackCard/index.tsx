import SVG from '@/CommonComponent/SVG/Svg';
import { ImagePath } from '@/Constant/constant';
import DynamicNumber from '@/utils/DynamicNumber';
import Image from 'next/image';
import React from 'react'
import { Badge, Card, CardBody, CardHeader, Col, Progress } from 'reactstrap'

const FeedbackCard = () => {
    return (
        <Col xl={3} sm={6}>
            <Card className="progress-items">
                <CardHeader className="pb-0">
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="d-flex gap-2">
                                <h5>Feedback</h5>
                                <Badge color='light-success' className="badge align-items-center d-flex txt-success">
                                    <SVG className='feather me-1 pt-0' iconId='arrow-chart-up' />
                                    <span>+2.4%</span>
                                </Badge>
                            </div>
                            <h3 className="mt-3">{'75,565'}</h3>
                        </div>
                        <div className="flex-shrink-0 bg-light-success">
                            <SVG className='svg-w-23 fill-success' iconId='feedback' />
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="progress-card align-items-center pt-0">
                    <div className="user-details customers">
                        <ul>
                            <li className="d-inline-block">
                                {DynamicNumber(4).map((item, index) => (
                                    <Image className="rounded-circle" key={index} src={`${ImagePath}/dashboard-2/user/${item}.png`} width={38} height={38} alt="user" />
                                ))}
                            </li>
                        </ul>
                    </div>
                    <Progress color='success' value={50} />
                </CardBody>
            </Card>
        </Col>
    )
}
export default FeedbackCard;