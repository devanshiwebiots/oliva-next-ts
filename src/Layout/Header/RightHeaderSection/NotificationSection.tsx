"use client";
import SVG from "@/CommonComponent/SVG/Svg";
import { Href, Notifications } from "@/Constant/constant";
import { NotificationData } from "@/Data/Layout/LayoutData";
import Link from "next/link";
import React from "react";
import { Badge } from "reactstrap";

export const NotificationSection = () => {
  return (
    <li className="onhover-dropdown">
      <div className="notification-box">
        <SVG iconId="Bell" />
        <Badge color="primary" pill>
          4{" "}
        </Badge>
      </div>
      <div className="onhover-show-div notification-dropdown">
        <h4 className="f-18 mb-0 dropdown-title">{Notifications}</h4>
        <ul>
          {NotificationData.map((item, index) => (
            <li className={`b-l-${item.color} bg-light-${item.color} border-4 mt-3`} key={index}>
              <p className={`font-${item.color}`}>
                {item.title}
                <span className={`font-${item.color}`}>{item.span}</span>
              </p>
            </li>
          ))}
          <li>
            <Link className="f-w-700" href={`/chat/private_chat`}>
              Check all
            </Link>
          </li>
        </ul>
      </div>
    </li>
  );
};
