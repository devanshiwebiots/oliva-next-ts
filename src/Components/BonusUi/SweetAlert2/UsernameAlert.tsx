import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { UsernameAlerts, Username, ThemePrimary } from "@/Constant/constant";
import { UsernameAlertData } from "@/Data/BonusUi/SweetAlert/SweetAlertData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";

const UsernameAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({ text: "Please! Submit Your Username :", input: "text", confirmButtonColor:ThemePrimary }).then((result) => {
      if (result.value) {
        SweetAlert.fire({ text: `Your name is : ${result.value}`,confirmButtonColor:ThemePrimary });
      } else {
        SweetAlert.fire({ text: `Your name is : ${result.value}`,confirmButtonColor:ThemePrimary });
      }
    });
  };
  
  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CommonCardHeader title={UsernameAlerts} subTitle={UsernameAlertData} />
        <CardBody className="btn-showcase">
          <Button color="secondary" className="sweet-13" onClick={displayAlert}>{Username}</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UsernameAlert;
