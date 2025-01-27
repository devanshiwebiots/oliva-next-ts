import React from "react";
import { BookMarkContainerPropsType, SidebarItemType } from "../../../../Types/LayoutTypes";
import BookmarkList from "./BookmarkList";
import { Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import SVG from "@/CommonComponent/SVG/Svg";
import { setBookMarkClass } from "@/Redux/Reducers/LayoutSlice";
import { RootState } from "@/Redux/Store";
import Link from "next/link";
import { Back, Bookmark, Href } from "@/Constant/constant";

export default function BookmarkContainer({ handleBookmark, bookmarkList, bookmarkItems, handleSearch }: BookMarkContainerPropsType) {
  const dispatch = useDispatch();
  const layoutState = useSelector((state: RootState) => state.layout);
  const { bookMarkClass } = layoutState;

  const backToBookmark = () => {
    dispatch(setBookMarkClass(!bookMarkClass));
  };
  return (
    <li className="onhover-dropdown">
      <SVG iconId="Star" />
      <div className="onhover-show-div bookmark-flip">
        <div className="flip-card">
          <div className={`flip-card-inner ${bookMarkClass ? "flipped" : ""}`}>
            <div className="front">
              <h4 className="f-18 mb-0 dropdown-title">{Bookmark}</h4>
              <BookmarkList bookmarkList={bookmarkList} />
            </div>
            <div className="back">
              <ul className="simple-list">
                <li>
                  <div className="bookmark-dropdown flip-back-content">
                    <Input type="text" placeholder="search..." onChange={handleSearch} />
                    <div className={bookmarkItems.length > 0 ? "Typeahead-menu filled-bookmark custom-scrollbar is-open" : ""}>
                      {bookmarkItems.map((data: SidebarItemType, index: number) => (
                        <div className="ProfileCard u-cf" key={index}>
                          <div className="ProfileCard-details">
                            <div className="ProfileCard-realName d-flex">
                              <Link className="realname" href={data.url || ""}>
                                <SVG iconId={`stroke-${data.icon}`} />
                                {data.title}
                              </Link>
                              <span className="pull-right">
                                <a href={Href}>
                                  <i className={`fa ${data.bookmark ? "fa-star" : "fa-star-o"} mt-1 icon-star`} onClick={(e) => handleBookmark(e, data)} />
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </li>
                <li>
                  <a onClick={backToBookmark} className="f-w-700 d-block flip-back" id="flip-back" href={Href}>
                    {Back}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
