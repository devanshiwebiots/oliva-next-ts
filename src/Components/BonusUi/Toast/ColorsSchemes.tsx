import { Button, Card, CardBody, Col, Toast, ToastBody } from "reactstrap";
import { useEffect, useState } from "react";
import { ColorSchema } from "@/Data/BonusUi/Toast/ToastData";
import { CommonCardHeader } from "@/Components/General/Widgets/Common/CommonCardHeader";
import { ColorsScheme } from "@/Constant/constant";

const ColorsSchemes = () => {
  const [open,setOpen] = useState(true)
  useEffect(()=>{
    setTimeout(()=>{
      setOpen(false);
    },6000)
  },[])

  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={ColorsScheme} subTitle={ColorSchema} />
        <CardBody className="toast-rtl colors-schemes">
          <Toast fade className="default-show-toast align-items-center text-light bg-warning border-0" isOpen={open}>
            <div className="d-flex justify-content-between align-items-center">
              <ToastBody>Your time over after 5 minute.</ToastBody>
              <Button close className="btn-close-white me-2 m-auto" onClick={() => setOpen(false)}></Button>
            </div>
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColorsSchemes;
