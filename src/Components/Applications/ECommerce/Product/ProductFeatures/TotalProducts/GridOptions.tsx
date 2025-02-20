import { Href } from '@/Constant/constant';
import { gridOptionsData } from '@/Data/Applications/Ecommerce/ProductData';
import { useAppDispatch } from '@/Redux/Hooks';
import { changeColumnClass } from '@/Redux/Reducers/EcommerceReducer/FilterReducer';
import React from 'react'

const GridOptions = () => {
    const dispatch = useAppDispatch();
    const handleColumnClass = (name: string) => {
        dispatch(changeColumnClass(name));
    };
    return (
        <div className="grid-options d-inline-block">
            <ul>
                {gridOptionsData.map((item, index) => (
                    <li key={index}>
                        <a className="product-2-layout-view" onClick={() => handleColumnClass(item.colClass)} href={Href} >
                            {item.gridLine.map((line, i) => (
                                <span key={i} className={`line-grid line-grid-${line} bg-primary`}></span>
                            ))}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default GridOptions;