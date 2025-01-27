'use client'
import React, { useRef } from 'react'
import { Table } from 'reactstrap';
import InvoiceFiveHeader from './InvoiceFiveHeader';
import InvoiceNumber from './InvoiceNumber';
import InvoiceTable from './InvoiceTable';
import CommonInvoiceSign from '../Common/InvoiceSign';
import Print from '../Common/Print';
import { useReactToPrint } from 'react-to-print';

const Invoice5Container = () => {
    const contentRef = useRef<HTMLDivElement | null>(null);

    const handlePrint = useReactToPrint({
      contentRef,
    });

    return (
      <>
        <div ref={contentRef}>
          <Table style={{ width: "1100px", margin: "0, auto" }} borderless>
            <tbody>
              <tr>
                <InvoiceFiveHeader />
              </tr>
              <tr>
                <InvoiceNumber />
              </tr>
              <tr>
                <InvoiceTable />
              </tr>
              <tr style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: 36 }}>
                <CommonInvoiceSign />
              </tr>
            </tbody>
          </Table>
        </div>
        <Print handlePrint={handlePrint} />
      </>
    );
}
export default Invoice5Container;