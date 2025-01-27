import React from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader';
import { ImagePath, NewsUpdateTitle } from '@/Constant/constant';
import { MonthlyDropdownList, newsUpdateData } from '@/Data/General/Dashboard/DashboardData';
import Image from 'next/image';
import Link from 'next/link';

const NewsUpdate = () => {
    return (
        <Col xl={4} md={6} className="box-col-6">
            <Card className="news-update">
                <DropdownWithHeader headerClass='pb-0' heading={NewsUpdateTitle}
                    dropDownClass='icon-dropdown' dropDownIcon dropDownList={MonthlyDropdownList} />
                <CardBody>
                    {newsUpdateData.map((item) => (
                        <div className={`d-flex align-items-center ${item.id === 1 ? "pt-0" : ""}`} key={item.id}>
                            <Image src={`${ImagePath}/dashboard/news/${item.image}`} width={60} height={47} alt="" />
                            <div className="flex-grow-1">
                                <Link href={`/social-app`}>
                                    <h5>{item.title}</h5>
                                    <span>{item.text}</span>
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
export default NewsUpdate;