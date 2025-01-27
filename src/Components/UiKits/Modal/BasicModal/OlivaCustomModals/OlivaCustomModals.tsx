import { Card, CardBody, Col, Row } from "reactstrap";
import { ModalOne } from "./ProfileModal/ModalOne";
import ModalTwo from "./ResultModal/ModalTwo";
import ModalThird from "./BalanceModal/ModalThird";
import { OlivaCustomModal } from "@/Constant/constant";
import { CustomModalData } from "@/Data/Uikits/Modal/ModalData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const OlivaCustomModals = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={OlivaCustomModal} subTitle={CustomModalData} headClass="pb-0" />
        <CardBody>
          <Row className="g-3">
            <ModalOne />
            <ModalTwo />
            <ModalThird />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OlivaCustomModals;
