import React, { useState } from 'react'
import DataTable from "react-data-table-component";
import { productListColumns, productListTableData } from '@/Data/Applications/Ecommerce/ProductListData';
import ProductSearch from './ProductSearch';

const ProductListTable = () => {
  const [filteredData, setFilteredData] = useState(productListTableData);
  return (
    <div className="list-product custom-product-list">
      <ProductSearch productdata={productListTableData} setFilteredData={setFilteredData} />
      <DataTable
        data={filteredData}
        columns={productListColumns} 
        pagination  
      />
    </div>
  )
}
export default ProductListTable;