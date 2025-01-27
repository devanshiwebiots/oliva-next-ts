import React, { useState } from 'react'
import { Filter } from 'react-feather';
import { Card, CardBody, Collapse } from 'reactstrap';
import ProductListBody from './ProductListBody';
import { Href } from '@/Constant/constant';
import Link from 'next/link';

const ProductListHeader = () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const handleFilterToggle = () => {
        setIsFilterOpen((prevState) => !prevState);
    };
    return (
        <div className="list-product-header">
            <div>
                <div className="light-box">
                    <a href={Href} onClick={handleFilterToggle}>
                        {isFilterOpen ? <i className='icon-close filter-close' /> : <Filter />}
                    </a>
                </div>
                <Link className="btn btn-primary" href={`/app/ecommerce/add-products`}>
                    <i className="fa fa-plus me-2" /> {'Add Product'}
                </Link>
            </div>
            <Collapse className={isFilterOpen ? "show" : ""}>
                <Card className="list-product-body">
                    <CardBody>
                        <ProductListBody />
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    )
}
export default ProductListHeader;