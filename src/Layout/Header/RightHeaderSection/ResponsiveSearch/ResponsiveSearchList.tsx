import SVG from "@/CommonComponent/SVG/Svg";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setSearchIcon } from "@/Redux/Reducers/LayoutSlice";
import { SearchBarContainPropsType } from "@/Types/LayoutTypes";
import React from "react";
import { FormGroup, Input } from "reactstrap";
import SearchResult from "./SearchResult";

const ResponsiveSearchList: React.FC<SearchBarContainPropsType> = ({ handleSearch, suggestion }) => {
  const dispatch = useAppDispatch();
  const layoutState = useAppSelector((state) => state.layout);
  const { searchIcon } = layoutState;

  const handleSearchIconClick = () => {
    dispatch(setSearchIcon(!searchIcon));
  };
  return (
    <li className="serchinput">
      <div className="serchbox" onClick={handleSearchIconClick}>
        <SVG iconId='fill-search' />
      </div>
      {searchIcon &&
        <FormGroup className={`search-form ${searchIcon ? 'open' : ''}`}>
          <Input type="text" placeholder="Search here..." onChange={handleSearch} />
          <SearchResult suggestion={suggestion} />
        </FormGroup>}
    </li>
  )
}
export default ResponsiveSearchList;