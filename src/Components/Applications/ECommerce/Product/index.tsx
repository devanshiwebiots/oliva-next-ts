'use client'
import Breadcrumbs from '@/CommonComponent/Breadcrumb';
import { Ecommerce, ProductTitle } from '@/Constant/constant';
import { useAppSelector } from '@/Redux/Hooks';
import React from 'react'
import { Container } from 'reactstrap'
import ProductFeatures from './ProductFeatures';
import ProductGrid from './ProductGrid';

const ProductContainer = () => {
    const { sidebarOpen } = useAppSelector((state) => state.filter);

    return (
        <>
            <Breadcrumbs pageTitle={ProductTitle} parent={Ecommerce} title={ProductTitle} />
            <Container fluid className={`product-wrapper ${sidebarOpen ? "sidebaron" : ""}`}>
                <div className="product-grid">
                    <ProductFeatures />
                    <ProductGrid />
                </div>
            </Container>
        </>
    )
}
export default ProductContainer;
