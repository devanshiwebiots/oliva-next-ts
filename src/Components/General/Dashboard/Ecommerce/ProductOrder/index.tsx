import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { ProductOrderTypes } from '@/Types/DashboardType';
import { MonthlyDropdownList, productOrderColumns, productOrderData } from '@/Data/General/Dashboard/DashboardData';
import { DropdownWithHeader } from '../../Common/DropdownWithHeader';
import { ProductOrderTitle } from '@/Constant/constant';
import FilterComponent from '../../Common/FilterComponent';

const ProductOrder = () => {
    const [filterText, setFilterText] = useState('');
    const filteredItems: ProductOrderTypes[] = productOrderData.filter(
        (item: ProductOrderTypes) => {
            return Object.values(item).some((value) =>
                value && value.toString().toLowerCase().includes(filterText.toLowerCase())
            );
        }
    );
    return (
        <Col xxl={6} xl={7} className="box-col-7">
            <Card className='custom-product-order'>
                <DropdownWithHeader headerClass='pb-0' heading={ProductOrderTitle}
                    dropDownClass='icon-dropdown' dropDownIcon dropDownList={MonthlyDropdownList} />
                <CardBody className="px-0 pb-0 product-order ">
                    <div className="table-responsive "> 
                        <div className='dataTables_wrapper no-footer'>
                        <div className='dataTables_filter'>
                    <FilterComponent
                        onFilter={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} filterText={filterText}/>
                        </div>  
                        <DataTable data={filteredItems} columns={productOrderColumns} className='display custom-scrollbar' />
                        </div> 
                    </div>
                </CardBody>
            </Card>
        </Col>
    )
}
export default ProductOrder;