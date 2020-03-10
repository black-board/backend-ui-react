import React, {useState,Fragment } from 'react';
import MaterialTable from 'material-table';
import { useUserAllow } from '@bb-backend/controller';
import TransitionsModal from './components/TransitionsModal';

export default function UserAllowPage() {
    const { columns, data } = useUserAllow()
    const [rowDataAuthUser, setRowDataAuthUser] = useState(null);
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
            title="การยืนยันตัวตน"
            columns={columns}
            data={data}
            actions={[
                {
                    icon: () => (<button>ตรวจสอบ</button>),
                    tooltip: 'show view',
                    onClick: (event, rowData) => {
                        setRowDataAuthUser(rowData);
                        setOpen(true);
                    }
                }
            ]}
            options={{
                actionsColumnIndex: -1
            }}
        />
        <TransitionsModal open={open} onClose={handleClose} data={rowDataAuthUser} />
        </Fragment> 
        );
}