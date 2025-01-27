import { useAppSelector } from "@/Redux/Hooks";
import { Fragment, useState } from "react";
import Menulist from "./Menulist";
import { menuList } from "@/Data/Layout/Menu";
import { SidebarMenuType } from "@/Types/LayoutTypes";
import { useTranslation } from "react-i18next";

const SidebarMenuList = () => {
  const [activeMenu, setActiveMenu] = useState([]);
  const { pinedMenu } = useAppSelector((state) => state.layout);
  const shouldHideMenu = (mainMenu: SidebarMenuType) => {
    return mainMenu.menu.map((data) => data.title).every((tittles) => pinedMenu.includes(tittles as string));
  }
  const { t } = useTranslation("common");
  return (
    <>
      {menuList &&
        menuList.map((mainMenu, index) => (
          <Fragment key={index}>
            <li className={`sidebar-main-title ${shouldHideMenu(mainMenu) ? "d-none" : ""}`}>
              <div>
                <h6 className='lan-1'>{t(mainMenu.title)}</h6>
              </div>
            </li>
            <Menulist menu={mainMenu.menu} activeMenu={activeMenu} setActiveMenu={setActiveMenu} level={0} />
          </Fragment>
        ))}
    </>
  );
};

export default SidebarMenuList;