'use client'
import React, { useRef } from 'react'
import { Table } from 'reactstrap'
import InvoiceTwoHeader from './InvoiceTwoHeader';
import InvoiceTwoDetails from './InvoiceTwoDetails';
import InvoiceTwoBilling from './InvoiceTwoBilling';
import InvoiceTwoContent from './InvoiceTwoContent';
import InvoiceTwoTotal from './InvoiceTwoTotal';
import Print from '../Common/Print';
import { useReactToPrint } from 'react-to-print';

const Invoice2Container = () => {
   const contentRef = useRef<HTMLDivElement | null>(null);

   const handlePrint = useReactToPrint({
     contentRef,
   });

    return (
      <>
        <div ref={contentRef}>
          <Table style={{ width: "1070px", margin: "0, auto" }} borderless>
            <tbody>
              <tr>
                <InvoiceTwoHeader />
              </tr>
              <tr>
                <InvoiceTwoDetails />
              </tr>
              <tr>
                <InvoiceTwoBilling />
              </tr>
              <tr>
                <InvoiceTwoContent />
              </tr>
              <tr>
                <InvoiceTwoTotal />
              </tr>
              <tr>
                <td>
                  <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 24 }} />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Print handlePrint={handlePrint} />
      </>
    );
}
export default Invoice2Container;