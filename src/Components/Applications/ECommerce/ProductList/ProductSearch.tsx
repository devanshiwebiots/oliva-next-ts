import { ProductSearchProp } from "@/Types/EcommerceType";
import React, { useState } from "react";
import { Col, Input, Label, Row } from "reactstrap";

const ProductSearch: React.FC<ProductSearchProp> = ({ productdata, setFilteredData }) => {
    const [searchText, setSearchText] = useState("");

    const handleSearch = () => {
        const lowerCaseSearchText = searchText.toLowerCase();
        const newFilteredData = productdata.filter(item => {
            for (const field in item) {
                if (item.hasOwnProperty(field)) {
                    const fieldValue = String(item[field]).toLowerCase();
                    if (fieldValue.includes(lowerCaseSearchText)) {
                        return true;
                    }
                }
            }
            return false;
        });
        setFilteredData(newFilteredData);
    };

    return (
        <Row className="align-items-center">
            <Col xs="auto">
                <Label>{'Search'}:</Label>
            </Col>
            <Col xs="auto">
                <Input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyUp={handleSearch}
                />
            </Col>
        </Row>
    );
}
export default ProductSearch;