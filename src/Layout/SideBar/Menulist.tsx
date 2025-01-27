/* eslint-disable react-hooks/exhaustive-deps */
import SVG from "@/CommonComponent/SVG/Svg";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setPinedMenu } from "@/Redux/Reducers/LayoutSlice";
import { MenuListType, SidebarItemType } from "@/Types/LayoutTypes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Badge } from "reactstrap";

const Menulist: React.FC<MenuListType> = ({ menu, setActiveMenu, activeMenu, level }) => {
  const { pinedMenu } = useAppSelector((state) => state.layout);
  const { sidebarIconType } = useAppSelector((state) => state.themeCustomizer)
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { t } = useTranslation("common");

  const handlePined = (value: string) => {
    if (!pinedMenu.includes(value)) {
      dispatch(setPinedMenu([...pinedMenu, value]));
    } else {
      let filterMenu = pinedMenu.filter((item) => item !== value)
      dispatch(setPinedMenu(filterMenu))
    }
  }
  const ActiveNavLinkUrl = (path?: string, active?: boolean) => {
    return pathname === path ? (active ? active : true) : "";
  };
  function shouldSetActive({ item }: { item: SidebarItemType }): boolean {
    var returnValue = false;
    if (item?.url === pathname) {
      returnValue = true;
    }
    if (!returnValue && item?.menu) {
      item?.menu.every((subItem: SidebarItemType) => {
        returnValue = shouldSetActive({ item: subItem });
        return !returnValue;
      });
    }
    return returnValue;
  }
  useEffect(() => {
    menu.forEach((item) => {
      let gotValue = shouldSetActive({ item });
      if (gotValue) {
        let temp = [...activeMenu];
        temp[level] = item.title;
        setActiveMenu(temp);
      }
    });
    ActiveNavLinkUrl()
  }, []);

  return (
    <>
      {menu?.map((item, index) => (
        <li key={index} className={`${level === 0 ? "sidebar-list" : "custom-magamenu"} ${pinedMenu.includes(item.title || "") ? "pined" : ""}  ${(item.menu ? item.menu.map((innerItem) => ActiveNavLinkUrl(innerItem.url)).includes(true) : ActiveNavLinkUrl(item.url)) || activeMenu[level] === item.title ? "active" : ""} `}>
          {level === 0 && <i className="fa fa-thumb-tack" onClick={() => item.title && handlePined(item.title)}></i>}
          {item.badge ? <Badge color={item.badgeColor}>{item.badgeName}</Badge> : ''}
          <Link
            className={`${level === 0 ? 'sidebar-link sidebar-title' : ''}  ${(item.menu ? item.menu.map((innerItem) => ActiveNavLinkUrl(innerItem.url)).includes(true) : ActiveNavLinkUrl(item.url)) || activeMenu[level] === item.title ? "active" : ""}`}
            href={item?.url ? item?.url : ""}
            onClick={() => { 
              const temp = activeMenu;
              temp[level] = item.title !== temp[level] && item.title;
              setActiveMenu([...temp]);
            }}>
            {item.icon && (<SVG className={`${sidebarIconType}-icon`} iconId={`${sidebarIconType}-${item.icon}`} />)}
            <span className="lan-3">{t(item.title || '')}</span>
            {item.menu && ( 
              <div className='according-menu'>
                {activeMenu[level] === item.title ? (<i className="fa fa-angle-down" />) : (<i className="fa fa-angle-right" />)}
              </div>
            )}
          </Link>
          {item.menu && (
            <ul className={`${level / 2 === 0 ? "sidebar-submenu" : "nav-sub-childmenu submenu-content"}`}
              style={{ display: `${(item.menu ? item.menu.map((innerItem) => ActiveNavLinkUrl(innerItem.url)).includes(true) : ActiveNavLinkUrl(item.url)) || activeMenu[level] === item.title ? "block" : "none"}`, }}>
              <Menulist menu={item.menu} activeMenu={activeMenu} setActiveMenu={setActiveMenu} level={level + 1} />
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

export default Menulist;