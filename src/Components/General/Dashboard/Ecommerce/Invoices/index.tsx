import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader';
import { InvoicesTitle } from '@/Constant/constant';
import { MonthlyDropdownList, monthlyInvoicesData } from '@/Data/General/Dashboard/DashboardData';
import SVG from '@/CommonComponent/SVG/Svg';
import Link from 'next/link';

const Invoices = () => {
    return (
        <Col xxl={4} xl={6} sm={6} className="box-col-6">
            <Card>
                <DropdownWithHeader headerClass='pb-0' heading={InvoicesTitle}
                    dropDownClass='icon-dropdown' dropDownIcon dropDownList={MonthlyDropdownList} />
                <CardBody>
                    <div className="monthly-invoices">
                        <ul>
                            {monthlyInvoicesData.map((item) => (
                                <li key={item.id}>
                                    <div className="monthly-data">
                                        <div className="invoice-data-icon">
                                            <span>
                                                <SVG iconId={item.icon} />
                                            </span>
                                            <div>
                                                <Link href={`/invoice/${item.link}`}>
                                                    <h4>{item.title}</h4>
                                                </Link>
                                                <h5>{item.subText}</h5>
                                            </div>
                                        </div>
                                        <div className="invoice-price">
                                            <span>${item.price}</span><span>{'Per Week'}</span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            <li>
                                <Link className="btn active w-100 d-flex gap-2 align-items-center" href={`/app/ecommerce/add-products`}>
                                    <SVG iconId='Plus-Circle' />
                                    {'Add Product'}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default Invoices;