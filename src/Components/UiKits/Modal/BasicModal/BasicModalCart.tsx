import { BasicModal } from "@/Constant/constant";
import { BasicData } from "@/Data/Uikits/Modal/ModalData";
import { Card, CardBody, Col } from "reactstrap";
import ScrollingModal from "./ScrollingModal/ScrollingModal";
import { SimpleModal } from "./SimpleModal/SimpleModal";
import { ToolTipAndPopover } from "./ToolTipAndPopover/ToolTipAndPopover";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import OpenModalOliva from "./OpenModalOliva/OpenModalOliva";

const BasicModalCart = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={BasicModal} subTitle={BasicData} headClass="pb-0" />
        <CardBody className="badge-spacing">
          <SimpleModal />
          <ScrollingModal />
          <ToolTipAndPopover />
          <OpenModalOliva />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicModalCart;
