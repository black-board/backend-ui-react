import React, { Fragment } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useStyles } from './styles';
import CloesAuthUserModal from '../CloesAuthUser';

export default function TransitionsModal(props) {
    const classes = useStyles();
    const { open, data, onClose } = props;
    const [openCloesAuth, setOpenCloesAuth] = React.useState(false);

    const handleOpen = () => {
        setOpenCloesAuth(true);
      };
    
      const handleClose = () => {
        setOpenCloesAuth(false);
      };

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
                    <Fragment>
                        <div className={classes.paper}>
                            <p>order_id: {data.order_id}</p>
                            <h2 id="transition-modal-title">name: {data.name}</h2>
                            <p id="transition-modal-description">type: {data.type}</p>
                            <p>date: {data.date}</p>
                            <center>
                                <button>ยืนยัน</button>
                                <button onClick={handleOpen}>ยกเลิก</button>
                            </center>
                        </div>
                        <CloesAuthUserModal open={openCloesAuth} onClose={handleClose}/>
                    </Fragment>
                ) : (
                        <Fragment>

                        </Fragment>
                    )}

            </Fade>
        </Modal>
    );
}