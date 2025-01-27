import { ImagePath, Pinned } from "@/Constant/constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "react-feather";
import { LogoWrapper } from "./LogoWrapper";
import SidebarMenuList from "./SideBarMenuList";
import LogoIconWrapper from "./LogoIconWrapper";
import { scrollToLeft, scrollToRight } from "@/Redux/Reducers/LayoutSlice";
import ConfigDB from "@/Config/ThemeConfig";

export const SideBar = () => {
  const { margin, sideBarToggle } = useAppSelector((state) => state.layout);
  const { pinedMenu } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();
  const wrapper = ConfigDB.settings.layout_class;

  return (
    <div className={`sidebar-wrapper ${sideBarToggle ? "close_icon" : ""}`} id="sidebar-wrappers">
      <div>
        <LogoWrapper />
        <LogoIconWrapper />
        <nav className="sidebar-main">
          <div className={`left-arrow ${margin === 0 ? "disabled" : ""}`} onClick={() => dispatch(scrollToLeft())} id="left-arrow">
            <ArrowLeft />
          </div>
          <div id="sidebar-menu" style={{ position: "inherit", marginLeft: `${wrapper === "horizontal-wrapper" ? margin + "px" : "0px"} ` }}>
            <ul className="sidebar-links custom-scrollbar" id="simple-bar">
              <div className="simplebar-wrapper">
                <div className="simplebar-mask">
                  <div className="simplebar-offset">
                    <div className="simplebar-content-wrapper">
                      <div className="simplebar-content">
                        <li className="back-btn">
                          <Link href={`/dashboard/default`}>
                            <Image width={32} height={32} className="img-fluid" src={`${ImagePath}/logo/logo-icon.png`} alt="" />
                          </Link>
                          <div className="mobile-back text-end">
                            <span>Back </span>
                            <i className="fa fa-angle-right ps-2" aria-hidden="true"></i>
                          </div>
                        </li>
                        <li className={`pin-title sidebar-main-title ${pinedMenu.length > 1 ? "show" : ""} `}>
                          <div>
                            <h6>{Pinned}</h6>
                          </div>
                        </li>
                        <SidebarMenuList />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <div className={`right-arrow ${margin === -2500 ? "disabled" : ""}`} onClick={() => dispatch(scrollToRight())} id="right-arrow">
            <ArrowRight />
          </div>
        </nav>
      </div>
    </div>
  );
};
