import React from 'react'
import { Card, CardBody, Col, Progress, Table } from 'reactstrap'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader';
import { CustomerSupportSummary, ImagePath } from '@/Constant/constant';
import { MonthlyDropdownList, sellingProductData } from '@/Data/General/Dashboard/DashboardData';
import Image from 'next/image';
import Link from 'next/link';

const SellingProduct = () => {
    return (
        <Col xl={6}>
            <Card className="selling-product">
                <DropdownWithHeader headerClass='pb-0' heading={CustomerSupportSummary}
                    dropDownClass='icon-dropdown' dropDownIcon dropDownList={MonthlyDropdownList} />
                <CardBody>
                    <div className="table-responsive custom-scrollbar">
                        <Table className="display">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Customer</th>
                                    <th>Progress</th>
                                    <th>Total</th>
                                    <th>Shipping</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sellingProductData.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="d-flex">
                                                <Image src={`${ImagePath}/dashboard/product/${item.image}`} width={40} height={40}  alt="" />
                                                <div className="flex-grow-1 ms-2">
                                                    <Link href={`/app/ecommerce/product-list`}>
                                                        <span>{item.name}</span>
                                                        <h5>{item.subText}</h5>
                                                    </Link>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span>{item.customer}</span>
                                            <h5>{item.email}</h5>
                                        </td>
                                        <td>
                                            <div className="progress-showcase">
                                                <Progress className={`sm-progress-bar progress-border-${item.progressColor}`} value={item.progressValue} />
                                            </div>
                                        </td>
                                        <td>$ {item.total}</td>
                                        <td>$ {item.shipping}</td>
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
export default SellingProduct;