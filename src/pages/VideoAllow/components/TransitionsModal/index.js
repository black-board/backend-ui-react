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
                        <p>id_video: {data.id_video}</p>
                        <h2 id="transition-modal-title">title: {data.title}</h2>
                        <p id="transition-modal-description">description: {data.description}</p>
                        <iframe width="560" height="315" src={data.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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