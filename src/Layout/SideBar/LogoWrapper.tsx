import SVG from "@/CommonComponent/SVG/Svg";
import { ImagePath } from "@/Constant/constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setSideBarToggle } from "@/Redux/Reducers/LayoutSlice";
import Image from "next/image";
import Link from "next/link";

export const LogoWrapper = () => {
  const dispatch = useAppDispatch();
  const layoutState = useAppSelector((state) => state.layout);
  const handleSidebarToggle = () => {
    dispatch(setSideBarToggle(!layoutState.sideBarToggle));
  };

  return (
    <>
      <div className="logo-wrapper">
        <Link href={`/dashboard/default`}>
          <Image width={121} height={38} className="img-fluid" src={`${ImagePath}/logo/logo.png`} alt="" />
        </Link>
        <div className="toggle-sidebar">
          <SVG className="sidebar-toggle" iconId="toggle-icon" onClick={handleSidebarToggle} />
        </div>
      </div>
    </>
  );
};