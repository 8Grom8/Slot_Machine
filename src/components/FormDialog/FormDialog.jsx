import React, {useState} from 'react';
import {Button, DialogContentText} from '@material-ui/core';

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

import SlotMachine from "../SlotMachine";

export default function FormDialog() {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () =>{
        setOpen(true)
    }

    const handleClose = () =>{
        setOpen(false)
    }

    return (
        <div>
            <Button variant="outlined" color="secondary" onClick={handleClickOpen}>OR||or</Button>
            <Dialog open={open} onClose={handleClose} area-labelledby = 'form-dialog-title'>
                <DialogTitle id='form-dialog-title'>Log in</DialogTitle>
                <DialogContent>
                    <DialogContentText>Slot</DialogContentText>
                    <SlotMachine close={handleClose}/>
                </DialogContent>
            </Dialog>
        </div>

    );
}
