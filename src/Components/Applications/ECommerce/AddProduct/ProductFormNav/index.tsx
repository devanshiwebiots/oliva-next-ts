import SVG from '@/CommonComponent/SVG/Svg'
import { Href } from '@/Constant/constant'
import { addProductNav } from '@/Data/Applications/Ecommerce/ProductData'
import { ProductFormNavProps } from '@/Types/EcommerceType'
import React from 'react'
import { Col, Nav, NavItem, NavLink } from 'reactstrap'

const ProductFormNav: React.FC<ProductFormNavProps> = ({ steps, setSteps }) => {
    return (
        <Col xxl={3} xl={4} className="box-col-4e sidebar-left-wrapper">
            <Nav className="sidebar-left-icons" pills>
                {addProductNav.map((data) => (
                    <NavItem key={data.id}>
                        <NavLink className={`${steps === data.id ? "active" : ''}`} href={Href} onClick={() => setSteps(data.id)}>
                            <div className="nav-rounded">
                                <div className="product-icons">
                                    <SVG className="stroke-icon" iconId={data.icon} />
                                </div>
                            </div>
                            <div className="product-tab-content">
                                <h5>{data.title}</h5>
                                <p>{data.subTitle}</p>
                            </div>
                        </NavLink>
                    </NavItem>
                ))}
            </Nav>
        </Col>
    )
}
export default ProductFormNav;