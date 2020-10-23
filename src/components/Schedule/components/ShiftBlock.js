import React, { useState } from 'react'
import Chip from '@material-ui/core/Chip';
import Modal from '../../Schedule/components/Modal'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';






const ShiftBlock = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = () => {

  }
  return (
    <div>
      <Chip
        size="small"
        color="primary"
        label="09a - 10a"
        onClick={handleClickOpen}
        onDelete={handleDelete}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Employee Name</DialogTitle>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Start Time"
            type="email"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="End Time"
            type="email"
          />
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Transfer
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default ShiftBlock
