import React, { useState, Fragment } from 'react';
import MaterialTable from 'material-table';
import { usePayment } from '@bb-backend/controller';
import TransitionsModal from './components/TransitionsModal';

export default function PaymentPage() {
    const { columns, data } = usePayment()
    const [rowDataPayment, setRowDataPayment] = useState(null);
    const [open, setOpen] = useState(false);

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <MaterialTable
                title="รายการยอดชำระเงิน"
                columns={columns}
                data={data}
                actions={[
                    {
                        icon: () => (<button>view</button>),
                        tooltip: 'show view',
                        onClick: (event, rowData) => {
                            setRowDataPayment(rowData);
                            setOpen(true);
                        }
                    }
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
            />
            <TransitionsModal open={open} onClose={handleClose} data={rowDataPayment} />
        </Fragment>
    );
}