import React from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import { MapContainer, TileLayer } from 'react-leaflet'
import { DropdownWithHeader } from '../../Common/DropdownWithHeader'
import { SaleTopCountriesTitle } from '@/Constant/constant'
import { MonthlyDropdownList, saleTopCountriesData } from '@/Data/General/Dashboard/DashboardData'
import { UsaPosition } from '@/Data/Miscellaneous/Maps/MapsData'

const SaleTopCountries = () => {
    return (
        <Col xxl={3} xl={4} sm={6} className="box-col-4">
            <Card className="state">
                <DropdownWithHeader headerClass='pb-0' heading={SaleTopCountriesTitle}
                    dropDownClass='icon-dropdown' dropDownIcon dropDownList={MonthlyDropdownList} />
                <CardBody>
                    {saleTopCountriesData.map((item) => (
                        <ul key={item.id} className={`d-flex ${item.id === 2 ? 'mt-4' : ''}`}>
                            {item.data.map((data) => (
                                <li className="balance-card" key={data.id}>
                                    <div className="Countries">
                                        <span className="rounded-pill" />
                                        <h5>{data.country}</h5>
                                    </div>
                                    <h2 className="mt-1 mb-0">{data.value}%</h2>
                                </li>
                            ))}
                        </ul>
                    ))}
                    <MapContainer style={{ height: 190 }} easeLinearity={0.35} attributionControl={true} center={UsaPosition} zoom={13} scrollWheelZoom={true} className="z-0 jvector-map-height">
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    </MapContainer>
                </CardBody>
            </Card>
        </Col>
    )
}
export default SaleTopCountries;