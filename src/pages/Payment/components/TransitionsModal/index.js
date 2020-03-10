import React, { Fragment } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from './styles';

export default function TransitionsModal(props) {
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
                {data !== null ? (
                    <div className={classes.paper}>
                        <p>id_payment: {data.id_payment}</p>
                        <h2 id="transition-modal-title">title: {data.title}</h2>
                        <p id="transition-modal-description">paid: {data.paid}</p>
                        <p>date: {data.date}</p>
                        <p>time: {data.time}</p>
                        <img src={data.image} width="200" height="400" />
                        <center>
                            <button>ยืนยัน</button>
                            <button>ยกเลิก</button>
                        </center>
                    </div>
                ) : (
                        <Fragment>

                        </Fragment>
                    )}

            </Fade>
        </Modal>
    );
}