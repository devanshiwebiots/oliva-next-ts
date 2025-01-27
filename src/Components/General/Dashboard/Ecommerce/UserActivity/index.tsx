import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader'
import { UserActivityTitle } from '@/Constant/constant'
import { applicationsMenu, MonthlyDropdownList, userActivityChart } from '@/Data/General/Dashboard/DashboardData'

const UserActivity = () => {
    return (
        <Col xxl={3} xl={6} sm={6} className="box-col-6">
            <Card>
                <DropdownWithHeader headerClass='pb-0' heading={UserActivityTitle}
                    dropDownClass='icon-dropdown' dropDownIcon dropDownList={MonthlyDropdownList} />
                <CardBody className="pt-0">
                    <div className="user-activity" id="UserActivity">
                        <ReactApexChart options={userActivityChart} series={userActivityChart.series} type='radialBar' height={285} />
                    </div>
                    <div className="user-activity">
                        <ul>
                            {applicationsMenu.map((item) => (
                                <li key={item.id}>
                                    <div className="applications-menu">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <h4>{item.value}%</h4>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default UserActivity;