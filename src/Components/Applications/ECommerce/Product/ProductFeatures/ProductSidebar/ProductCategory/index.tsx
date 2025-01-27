import { BrandText, CategoryText, ColorsText, NewProducts, Price } from '@/Constant/constant';
import React from 'react'
import CategoryFilter from './CategoryFilter';
import BrandFilter from './BrandFilter';
import ColorsFilter from './ColorsFilter';
import PriceRange from './PriceRange';

const ProductCategory = () => {

    return (
        <>
            <div className="product-filter">
                <h4 className="f-w-600">{CategoryText}</h4>
                <CategoryFilter />
            </div>
            <div className="product-filter">
                <h4 className="f-w-600">{BrandText}</h4>
                <BrandFilter />
            </div>
            <div className="product-filter slider-product">
                <h4 className="f-w-600">{ColorsText}</h4>
                <ColorsFilter />
            </div>
            <div className="product-filter pb-0">
                <h4 className="f-w-600">{Price}</h4>
                <PriceRange />
                <h4 className="f-w-600 pt-3">{NewProducts}</h4>
            </div>
        </>
    );
};
export default ProductCategory;