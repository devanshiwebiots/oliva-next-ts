'use client'
import React, { useRef } from 'react'
import { Table } from 'reactstrap'
import InvoiceHeader from './InvoiceHeader';
import InvoiceBackImage from './InvoiceBackImage';
import InvoiceContent from './InvoiceContent';
import InvoiceOrder from './InvoiceOrder';
import InvoiceSign from './InvoiceSign';
import Print from '../Common/Print';
import { useReactToPrint } from 'react-to-print';

const Invoice1Container = () => {
    const contentRef = useRef<HTMLDivElement | null>(null);

    const handlePrint = useReactToPrint({
      contentRef,
    });
    return (
      <>
        <div ref={contentRef}>
          <Table className="table-wrapper" borderless>
            <tbody>
              <tr>
                <InvoiceHeader />
              </tr>
              <tr>
                <InvoiceBackImage />
              </tr>
              <tr>
                <InvoiceContent />
              </tr>
              <tr>
                <InvoiceOrder />
              </tr>
            </tbody>
            <tfoot>
              <tr style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "12px" }}>
                <InvoiceSign />
              </tr>
            </tfoot>
          </Table>
        </div>
        <Print handlePrint={handlePrint} />
      </>
    );
}
export default Invoice1Container;