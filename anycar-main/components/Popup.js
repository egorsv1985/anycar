import React, {useState, useEffect} from 'react';
import Modal from '@material-ui/core/Modal';
import styles from '/styles/Popup.module.scss'
import Zoom from "@material-ui/core/Zoom";
import Backdrop from '@material-ui/core/Backdrop';
import {makeStyles} from "@material-ui/core";

export default function Popup({open, setOpen, video}) {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
  }));

  const classes = useStyles();


  const body = (
    <div className={styles.popup}>
      <svg className={styles.popup__close} onClick={() => setOpen(false)}  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 1L7.5 7.5M1 14L7.5 7.5M7.5 7.5L1 1L14 14" stroke="#A2A2A2" strokeWidth="2"/>
      </svg>
      <div dangerouslySetInnerHTML={{__html: video}} />
    </div>
  );

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      style={{overflowY: 'auto'}}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      className={classes.modal}
    >
      <Zoom in={open}>
        {body}
      </Zoom>
    </Modal>
  );
}