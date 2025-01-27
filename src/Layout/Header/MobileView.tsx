"use client";
import SVG from "@/CommonComponent/SVG/Svg";
import { ImagePath } from "@/Constant/constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setSideBarToggle } from "@/Redux/Reducers/LayoutSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col } from "reactstrap";

export const MobileView = () => {
  const dispatch = useAppDispatch();
  const { sideBarToggle } = useAppSelector((state) => state.layout);
  const toggleGrid = () => {
      dispatch(setSideBarToggle(!sideBarToggle))
  }
  return (
    <Col xs="auto" className="header-logo-wrapper p-0">
      <div className="logo-wrapper">
        <Link href={`/dashboard/default`}>
          <Image width={120} height={38} className="img-fluid for-light" src={`${ImagePath}/logo/logo-1.png`} alt="" />
          <Image width={120} height={38} className="img-fluid for-dark" src={`${ImagePath}/logo/logo.png`} alt="" />
        </Link>
      </div>
      <div className="toggle-sidebar">
        <SVG iconId="fill-animation" className="sidebar-toggle" onClick={toggleGrid}  />
      </div>
    </Col>
  );
};