import { Href } from '@/Constant/constant';
import Link from 'next/link';
import React from 'react';
import { useReactToPrint } from "react-to-print";

const Print = ({ handlePrint }: { handlePrint: VoidFunction }) => {
  return (
    <span className="mb-3" style={{ display: "flex", justifyContent: "center" }}>
      <Link className="me-2" onClick={handlePrint} style={{ background: "var(--theme-default)", color: "rgba(255, 255, 255, 1)", borderRadius: 10, padding: "18px 27px", fontSize: 16, fontWeight: 600, outline: 0, border: 0, textDecoration: "none" }} href={Href}>
        {"Print Invoice"}
        <i className="icon-arrow-right" style={{ fontSize: 13, fontWeight: "bold", marginLeft: 10 }} />
      </Link>
      <Link style={{ background: "rgba(48, 126, 243, 0.1)", color: "var(--theme-default)", borderRadius: 10, padding: "18px 27px", fontSize: 16, fontWeight: 600, outline: 0, border: 0, textDecoration: "none" }} href={Href} download>
        {"Download"}
        <i className="icon-arrow-right" style={{ fontSize: 13, fontWeight: "bold", marginLeft: 10 }} />
      </Link>
    </span>
  );
};
export default Print;