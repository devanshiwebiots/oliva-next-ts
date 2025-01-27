import { invoiceSixTable } from '@/Data/Applications/Ecommerce/InvoiceData';
import React from 'react'
import { Table } from 'reactstrap'
import InvoiceSixTableBody from './InvoiceSixTableBody';
import InvoiceFooter from './InvoiceFooter';

const InvoiceSixTable = () => {
    return (
        <div>
            <div className="table-responsive custom-scrollbar custom-scrollbar invoice-table" id="table">
                <Table bordered striped>
                    <tbody>
                        <tr>
                            {invoiceSixTable.map((data, i) => (
                                <td className="item" key={i}>
                                    <h3 className="p-2 mb-0">{data}</h3>
                                </td>
                            ))}
                        </tr>
                        <InvoiceSixTableBody />
                        <tr>
                            <td />
                            <td />
                            <td className="Rate">
                                <h3 className="mb-0 p-2">{'Total'}</h3>
                            </td>
                            <td className="payment">
                                <h3 className="mb-0 p-2">$3,644.25</h3>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <InvoiceFooter />
        </div>
    )
}
export default InvoiceSixTable;