import React, { useState } from 'react'
import { Card, CardBody, Col } from 'reactstrap';
import DataTable from 'react-data-table-component'
import DatatableSearchBar from './DatatableSearchBar';
import { orderHistoryColumns, orderHistoryDataTable } from '@/Data/Applications/Ecommerce/OrderHistoryData';
import { CommonCardHeader } from '@/Components/General/Widgets/Common/CommonCardHeader';
import { DatatableOrderHistoryTitle } from '@/Constant/constant';

const DatatableOrderHistory = () => {
  const [filteredData, setFilteredData] = useState(orderHistoryDataTable);

  return (
    <Col sm={12}>
      <Card className='custom-datatable'>
        <CommonCardHeader title={DatatableOrderHistoryTitle} />
        <CardBody>
          <DatatableSearchBar tableData={orderHistoryDataTable} setFilteredData={setFilteredData} />
          <div className="order-history table-responsive custom-scrollbar">
            <DataTable
              data={filteredData}
              columns={orderHistoryColumns}
              pagination
              highlightOnHover
              striped
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}
export default DatatableOrderHistory;