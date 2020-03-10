import React, { Fragment } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from './styles';

export default function CloesAuthUserModal(props) {
    const classes = useStyles();
    const { open, data, onClose } = props;


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <p>หมายเหตุ</p>
                    <textarea rows="4" cols="50"></textarea>
                    <center>
                        <button>ยืนยัน</button>
                        <button>ยกเลิก</button>
                    </center>
                </div>


            </Fade>
        </Modal>
    );
}