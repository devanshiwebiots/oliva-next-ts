"use client";
import { ChangeEvent, useState } from "react";
import ResponsiveSearchList from "./ResponsiveSearchList";
import { SidebarItemType } from "@/Types/LayoutTypes";
import { menuList } from "@/Data/Layout/Menu";

export const ResponsiveHeaderSearch = () => {
  const [suggestion, setSuggestion] = useState<SidebarItemType[]>([]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchKey = event.target.value.toLowerCase();
    if (searchKey !== "") {
      let icon: string | undefined;
      let suggestionArray: SidebarItemType[] = [];
      let updatedList: SidebarItemType = {};
      const deepSearchFun = (menuItem: any, searchKeyValue: string, mainTitle: string | undefined) => {
        if (menuItem.title.toLowerCase().includes(searchKeyValue) && menuItem.url) {
          updatedList = { ...menuItem, mainTitle, icon };
          suggestionArray.push(updatedList);
        }
        if (!menuItem.menu) return;
        menuItem.menu.map((mainSubItem: any) => {
          if (menuItem.icon) {
            icon = menuItem.icon;
          }
          deepSearchFun(mainSubItem, searchKeyValue, mainTitle);
        });
      };
      menuList.map((mainItem) => {
        mainItem.menu.map((data) => {
          const mainTittle = data.title;
          deepSearchFun(data, searchKey, mainTittle);
        });
      });
      setSuggestion(suggestionArray);
    }
    if (searchKey === "") {
      setSuggestion([]);
    }
  };
  return (
    <>
      <ResponsiveSearchList handleSearch={handleSearch} suggestion={suggestion} />
    </>
  )
}