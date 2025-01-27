import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader';
import { ImagePath, NewOrderTitle } from '@/Constant/constant';
import { MonthlyDropdownList, newOrderData } from '@/Data/General/Dashboard/DashboardData';
import Image from 'next/image';
import Link from 'next/link';

const NewOrder = () => {
    return (
        <Col xxl={3} xl={5} sm={6} className="box-col-5">
            <Card>
                <DropdownWithHeader headerClass='pb-0' heading={NewOrderTitle}
                    dropDownClass='icon-dropdown' dropDownIcon dropDownList={MonthlyDropdownList} />
                <CardBody className="pt-0 product-card">
                    <div className="table-responsive custom-scrollbar">
                        <Table className="display w-100">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Code</th>
                                    <th>price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {newOrderData.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="d-flex">
                                                <Image src={`${ImagePath}/dashboard-2/product/${item.image}`} width={40} height={40} alt="" />
                                                <div className="flex-grow-1 ms-2">
                                                    <Link href={`/app/ecommerce/product-page`}>
                                                        <span>{item.name}</span>
                                                        <h5>{item.subText}</h5>
                                                    </Link>
                                                </div>
                                                <div className="active-status active-online" />
                                            </div>
                                        </td>
                                        <td>
                                            <span>{'Coupon Code'}</span>
                                            <h5>{item.code}</h5>
                                        </td>
                                        <td>
                                            <span>{item.percent}%</span>
                                            <h5>${item.price}</h5>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default NewOrder;