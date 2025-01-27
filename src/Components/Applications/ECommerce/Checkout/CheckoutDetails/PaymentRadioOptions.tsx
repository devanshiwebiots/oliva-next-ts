import { CashOnDelivery, CheckPayments, ImagePath, PayPal } from '@/Constant/constant';
import Image from 'next/image';
import React from 'react'
import { Col, Input, Label, Row } from 'reactstrap'

const PaymentRadioOptions = () => {
    return (
        <Row>
            <Col>
                <Label className="d-block" htmlFor="edo-ani">
                    <Input className="radio_animated" id="edo-ani" type="radio" name="rdo-ani" defaultChecked />
                    {CheckPayments}
                </Label>
                <Label className="d-block" htmlFor="edo-ani1">
                    <Input className="radio_animated" id="edo-ani1" type="radio" name="rdo-ani" />
                    {CashOnDelivery}
                </Label>
                <Label className="d-block" htmlFor="edo-ani2">
                    <Input className="radio_animated" id="edo-ani2" type="radio" name="rdo-ani" />
                    {PayPal}
                    <Image className="img-paypal" width={206} height={71} src={`${ImagePath}/checkout/paypal.png`} alt="" />
                </Label>
            </Col>
        </Row>
    )
}
export default PaymentRadioOptions;