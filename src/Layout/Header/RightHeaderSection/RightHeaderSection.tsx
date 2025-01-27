"use client";
import React from "react";
import { Col } from "reactstrap";
import { ResponsiveHeaderSearch } from "./ResponsiveSearch/ResponsiveHeaderSearch";
import { NotificationSection } from "./NotificationSection";
import { CartSection } from "./CartSection/CartSection";
import { MessageSection } from "./MessageSection";
import { DarkMode } from "./DarkMode";
import { UserSection } from "./UserSection";
import MaximizeScreen from "../Maximize";
import Language from "./Language";
import BookmarkHeader from "./BookmarkHeader";

export const RightHeaderSection = () => {
  return (
    <Col xxl="7" xl="6" xs="auto" className="nav-right box-col-6 pull-right right-header p-0 ms-auto">
      <ul className="nav-menus">
        <ResponsiveHeaderSearch />
        <Language />
        <MaximizeScreen />
        <NotificationSection />
        <BookmarkHeader />
        <CartSection />
        <MessageSection />
        <DarkMode />
        <UserSection />
      </ul>
    </Col>
  );
};
