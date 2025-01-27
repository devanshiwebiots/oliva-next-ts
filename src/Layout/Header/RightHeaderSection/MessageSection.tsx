"use client";
import React from "react";
import Image from "next/image";
import { ImagePath, Message } from "@/Constant/constant";
import SVG from "@/CommonComponent/SVG/Svg";
import { MessageData } from "@/Data/Layout/LayoutData";
import { X } from "react-feather";
import Link from "next/link";
import { Badge } from "reactstrap";

export const MessageSection = () => {
  return (
    <li className="onhover-dropdown">
      <div className="message">
        <SVG iconId="Message" />
        <Badge color='secondary' pill />
        <span className="rounded-pill badge-secondary"> </span>
      </div>
      <div className="onhover-show-div message-dropdown">
        <h6 className="f-18 mb-0 dropdown-title">{Message}</h6>
        <ul>
          {MessageData.map((item, index) => (
            <li className={`px-0 ${index === 0 ? 'pt-0' : ''}`} key={index}>
              <div className="d-flex align-items-start">
                <div className="message-img bg-light-primary">
                  <Image width={40} height={40} src={`${ImagePath}/user/${item.src}`} alt="image" />
                </div>
                <div className="flex-grow-1">
                  <h5 className="mb-1">
                    <Link href={`/email/letter_box`}>{item.title}</Link>
                  </h5>
                  <p>{item.tag}</p>
                </div>
                <div className="notification-right">
                  <X />
                </div>
              </div>
            </li>
          ))}
          <li>
            <Link className="f-w-700" href={`/email/letter_box`}>
              Check all
            </Link>
          </li>
        </ul>
      </div>
    </li >
  );
};