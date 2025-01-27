import React, { Fragment } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader';
import { ImagePath, NotificationsTitle } from '@/Constant/constant';
import { MonthlyDropdownList, notificationsCardData } from '@/Data/General/Dashboard/DashboardData';
import Image from 'next/image';
import Link from 'next/link';

const NotificationsCard = () => {
    return (
        <Col xl={4} md={6}>
            <Card className="notifications-card">
                <DropdownWithHeader headerClass='pb-0' heading={NotificationsTitle}
                    dropDownClass='icon-dropdown' dropDownIcon dropDownList={MonthlyDropdownList} />
                <CardBody>
                    {notificationsCardData.map((item) => (
                        <div className={`d-flex align-items-center ${item.id === 1 ? 'pt-0' : ''}`} key={item.id}>
                            <Image src={`${ImagePath}/dashboard-2/user/${item.image}`} alt="" width={45} height={45} />
                            <div className="flex-grow-1">
                                <Link href={`/social-app`}>
                                    <h5>
                                        {item.details.map((data, index) => (
                                            <Fragment key={index}>
                                                <strong>{data.name}</strong> {data.text}
                                            </Fragment>
                                        ))}
                                    </h5>
                                    <div className="notification-details">
                                        <span>{item.subText}</span>
                                        <div className="notification-dot" />
                                    </div>
                                </Link>
                            </div>
                            <div className="flex-shrink-0">
                                <Button color='transparent'>{item.time}</Button>
                            </div>
                        </div>
                    ))}
                </CardBody>
            </Card>
        </Col>
    )
}
export default NotificationsCard;