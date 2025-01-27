import { ImagePath } from "@/Constant/constant";
import Image from "next/image";

const UserDetail = () => {
  return (
      <div className="d-flex align-items-center">
        <div className="media-size-email">
          <Image width={52} height={52} className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`} alt="image"/>
        </div>
        <div className="flex-grow-1">
          <h4>Mark Jecno</h4>
          <p>Markjecno@gmail.com</p>
        </div>
      </div>
  );
};

export default UserDetail;
