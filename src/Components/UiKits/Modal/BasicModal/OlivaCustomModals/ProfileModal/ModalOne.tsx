import { ClickOut, ImagePath } from "@/Constant/constant";
import { useState } from "react";
import { Button, Col } from "reactstrap";
import { CommonOlivaModalTitle } from "../Common/CommonOlivaModalTitle";
import { ProfileModal } from "./ProfileModal";
import Image from "next/image";

export const ModalOne = () => {
  const [modalOne, setModalOne] = useState(false);
  const modalOneToggle = () => setModalOne(!modalOne);

  return (
    <Col xl="4" md="6" className="custom-alert text-center">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="Oliva-demo-img">
          <CommonOlivaModalTitle heading="Modal 1 -" subHeading="Profile Modal" text="Example of Oliva dashboard profile card." />
          <div className="overflow-hidden">
            <Image width={482} height={263} className="image-fluid" src={`${ImagePath}/alert/social.jpg`} alt="social" />
            <Button color="primary" className="mx-auto mt-3" onClick={modalOneToggle}>{ClickOut}</Button>
          </div>
          <ProfileModal modalOne={modalOne} modalOneToggle={modalOneToggle} />
        </div>
      </div>
    </Col>
  );
};
