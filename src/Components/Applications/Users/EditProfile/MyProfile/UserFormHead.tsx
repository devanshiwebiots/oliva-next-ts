import { Designer, ImagePath } from "@/Constant/constant";
import Image from "next/image";
import { Row } from "reactstrap";

export const UserFormHead = () => {
  return (
    <Row>
      <div className="profile-title">
        <div className="d-flex">
          <Image width={70} height={70} className="img-70 rounded-circle" alt="" src={`${ImagePath}/user/7.jpg`} />
          <div className="flex-grow-1">
            <h3 className="mb-1 text-uppercase">Mark Jecno</h3>
            <p>{Designer}</p>
          </div>
        </div>
      </div>
    </Row>
  );
};