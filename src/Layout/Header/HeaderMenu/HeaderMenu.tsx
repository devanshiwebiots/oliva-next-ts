"use client";
import React, { ChangeEvent, useState } from "react";
import { Col, FormGroup, Input } from "reactstrap";
import SVG from "@/CommonComponent/SVG/Svg";
import { SidebarItemType } from "@/Types/LayoutTypes";
import { menuList } from "@/Data/Layout/Menu";
import SearchResult from "./SearchResult";
import { title } from "process";

export const HeaderMenu = () => {
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
    <Col xxl="5" xl="6" xs="auto" className="left-header box-col-4 horizontal-wrapper p-0">
      <div className="left-menu-header">
        <ul className="header-left"> 
          <li> 
            <div className="w-100 custom-search-bar form-group"> 
              <div className="Typeahead Typeahead--twitterUsers">
                <div className="u-posRelative d-flex"> 
                  <SVG className='search-bg svg-color me-2' iconId='fill-search' />
                  <Input onChange={handleSearch} className="demo-input py-0 Typeahead-input form-control-plaintext w-100" type="text" placeholder="Search Oliva .." />
                </div>
                <SearchResult suggestion={suggestion} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Col>
  );
};
