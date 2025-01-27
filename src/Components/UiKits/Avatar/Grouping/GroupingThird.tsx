import { ImagePath } from "@/Constant/constant";
import { GroupingImageThird } from "@/Data/Uikits/Avatar/AvatarData";
import Image from "next/image";

export const GroupingThird = () => {
  return (
    <div className="customers d-inline-block avatar-group">
      <ul>
        <li className="d-inline-block">
          <Image width={40} height={40} className="img-40 rounded-circle" src={`${ImagePath}/user/3.jpg`} alt="image" />
        </li>
        {GroupingImageThird.map((item, index) => (
          <li className="d-inline-block" key={index}>
            <Image width={40} height={40} className="img-40 rounded-circle" src={`${ImagePath}${item}`} alt="image" />
          </li>
        ))}
      </ul>
    </div>
  );
};