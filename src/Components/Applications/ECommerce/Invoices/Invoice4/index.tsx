'use client'
import React, { useRef } from 'react'
import { Table } from 'reactstrap'
import InvoiceFourHeader from './InvoiceFourHeader';
import InvoiceFourDetail from './InvoiceFourDetail';
import InvoiceFourTable from './InvoiceFourTable';
import InvoiceTotal from './InvoiceTotal';
import CommonInvoiceSign from '../Common/InvoiceSign';
import Print from '../Common/Print';
import { useReactToPrint } from 'react-to-print';

const Invoice4Container = () => {
    const contentRef = useRef<HTMLDivElement | null>(null);

    const handlePrint = useReactToPrint({
      contentRef,
    });

    return (
      <>
        <div ref={contentRef}>
          <Table style={{ width: "1110px", margin: "0, auto" }} borderless>
            <tbody>
              <tr>
                <InvoiceFourHeader />
              </tr>
              <tr>
                <InvoiceFourDetail />
              </tr>
              <tr>
                <InvoiceFourTable />
              </tr>
              <tr>
                <td style={{ height: 3, width: "100%", background: "linear-gradient(90deg, var(--theme-default) 20.61%, #54BA4A 103.6%)", display: "block", padding: "0" }} />
              </tr>
              <tr>
                <InvoiceTotal />
              </tr>
              <tr style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
                <CommonInvoiceSign />
              </tr>
            </tbody>
          </Table>
        </div>
        <Print handlePrint={handlePrint} />
      </>
    );
}
export default Invoice4Container;