import React from "react";
import { Col, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { BookmarkListProps, SidebarItemType } from "../../../../Types/LayoutTypes";
import { RootState } from "@/Redux/Store";
import { setBookMarkClass } from "@/Redux/Reducers/LayoutSlice";
import SVG from "@/CommonComponent/SVG/Svg";
import Link from "next/link";
import { AddNewBookmark, Href } from "@/Constant/constant";

export default function BookmarkList({ bookmarkList }: BookmarkListProps) {
  const dispatch = useDispatch();
  const layoutState = useSelector((state: RootState) => state.layout);
  const { bookMarkClass } = layoutState;

  const addNewBookmark = () => {
    dispatch(setBookMarkClass(!bookMarkClass));
  };
  return (
    <ul className="bookmark-dropdown simple-list">
      <li className="pt-0 px-0 custom-scrollbar list-group-item">
        <Row className="g-3">
          {bookmarkList.map((data: SidebarItemType, index: number) => (
            <Col xs={4} className="text-center" key={index}>
              <div className="bookmark-content">
                <div className="bookmark-icon">
                  <SVG iconId={`stroke-${data.icon}`} />
                </div>
                <Link href={data.url || ""}>
                  <span>{data.title}</span>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </li>
      <li className="text-center">
        <a onClick={addNewBookmark} className="flip-btn f-w-700" id="flip-btn" href={Href}>
          {AddNewBookmark}
        </a>
      </li>
    </ul>
  );
}
