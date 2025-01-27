import React from 'react'
import { Card, CardBody, Col, Table } from 'reactstrap'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader';
import { ImagePath, NewCustomersTitle } from '@/Constant/constant';
import { MonthlyDropdownList, newCustomersData } from '@/Data/General/Dashboard/DashboardData';
import Image from 'next/image';
import Link from 'next/link';

const NewCustomers = () => {
    return (
        <Col xxl={4} lg={5} md={4} className="box-col-5e">
            <Card className="new-customers">
                <DropdownWithHeader headerClass='pb-0' heading={NewCustomersTitle}
                    dropDownClass='icon-dropdown' dropDownIcon dropDownList={MonthlyDropdownList} />
                <CardBody>
                    <div className="table-responsive custom-scrollbar">
                        <Table className="display">
                            <tbody>
                                {newCustomersData.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <div className="d-flex">
                                                <Image src={`${ImagePath}/dashboard/user/${item.image}`} width={40} height={40} alt="" />
                                                <div className="flex-grow-1 ms-2">
                                                    <Link href={`/users/user_profile`}>
                                                        <span>{item.name}</span>
                                                        <h5>{item.email}</h5>
                                                    </Link>
                                                </div>
                                                <div className="active-status active-online" />
                                            </div>
                                        </td>
                                        <td>{item.product}</td>
                                        <td>{item.sale} Sale</td>
                                        <td>${item.rate}</td>
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
export default NewCustomers;