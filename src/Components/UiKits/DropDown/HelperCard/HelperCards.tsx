import { HelperCards } from "@/Constant/constant";
import { Card, CardBody, Col } from "reactstrap";
import { WarningCard } from "./WarningCard";
import { AlertCard } from "./AlertCard";
import { HelperCart } from "./HelperCard";
import { HelperData } from "@/Data/Uikits/DropDown/DropDownData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const HelperCard = () => {
  return (
    <Col xl="6">
      <Card className="custom-helper-card">
        <CommonCardHeader title={HelperCards} subTitle={HelperData} headClass="pb-0" />
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            <HelperCart />
            <WarningCard />
            <AlertCard />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HelperCard;
