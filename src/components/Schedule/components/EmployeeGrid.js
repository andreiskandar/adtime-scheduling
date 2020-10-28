import React, { useState } from "react";
import "./employeeGrid.scss";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
  TextField,
  Avatar,
} from "@material-ui/core";
import { HOURS_DICT, ERROR_MESSAGES_DICT } from "../../../helpers/dictionary";
import TransferShiftMenuButton from "./TransferShiftMenuButton";
import CategoryButton from "./CategoryButton";
import useStyles from "./styles/formStyles";
import useVisualMode from "../../../hooks/useVisualMode";
import Transfer from "../../Schedule/components/confirm/Confirmtransfer";
import Delete from "../../Schedule/components/confirm/Confirmdelete";

const EmployeeGrid = (props) => {
  const classes = useStyles();
  const { shift_id, users, date, categories } = props;
  const event_date = date.split("T")[0];
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  const [categorySelected, setCategorySelected] = useState({});
  const [warning, setWarning] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const clickGrid = (e) => {
    // getting grid_id from user selection
    const grid_id = parseInt(e.target.attributes[0].value);
    console.log("grid_id:", grid_id);

    // open modal
    setOpen(true);

    // convert grid_id to hours for database query
    const start_time = HOURS_DICT[grid_id + 1];

    setStartTime(start_time);

    // time validation when user selects time that has been booked
    if (shift_id && shift_id.includes(grid_id)) {
      setError(ERROR_MESSAGES_DICT["DOUBLE_BOOKED"]);
      return;
    }
  };

  const reset = () => {
    setError("");
    setSelected("");
    setCategorySelected({});
    setOpen(false);
  };

  const validate = (e) => {
    if (!endTime) {
      setError(ERROR_MESSAGES_DICT["CANNOT_BE_BLANK"]);
      return;
    }
    if (endTime > "21:01") {
      setError(ERROR_MESSAGES_DICT["AFTER_9PM"]);
      return;
    }

    // // // convert end_time to shift_id
    // const endTimeShiftId = parseInt(endTime) - 8;
    // // // FIX THIS LATER. BUG EXISTS
    // if (shift_id.includes(endTimeShiftId)) {
    //   setError(ERROR_MESSAGES_DICT['DOUBLE_BOOKED']);
    //   return;
    // }

    submit();
  };

  const submit = () => {
    const user_id = props.id;
    const start_time = startTime;
    const end_time = endTime;
    const category_id = categorySelected.id;
    console.log('category_id:', category_id)
    const transferToUserId = selected.id;

    if (!selected) {
      props.submitShift(user_id, start_time, end_time, event_date, category_id);
    } else {
      props.transferShiftId(user_id, start_time, end_time, transferToUserId, event_date, category_id)
    }
    reset();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    remove();
  };

  const handleOpen2 = () => {
    setWarning(true);
  };

  const handleClose2 = () => {
    setWarning(false);
  };

  const deleteConfirmOpen = () => {
    setDeleteConfirm(true);
  };

  const deleteConfirmClose = () => {
    setDeleteConfirm(false);
  };

  const remove = () => {
    const user_id = props.id;
    const start_time = startTime;
    const end_time = endTime;
    const category_id = categorySelected.id;

    props.removeShift(user_id, start_time, end_time, event_date, category_id);

    reset();
  };

  const renderSpan = Array.from({ length: 12 }, (x, i) => {
    const background =
      shift_id && shift_id.includes(i + 1) ? props.color : "#eeeeee";
    return (
      <span
        key={i}
        data-id={i}
        onClick={clickGrid}
        style={{ backgroundColor: `${background}` }}
      />
    );
  });

  const errorElement = <section className={classes.error}>{error}</section>;

  const transferShiftSelected = (
    <>
      <img
        src="images/swap.png"
        alt="swap"
        className={classes.swap_img__menu}
      ></img>
      <div className={classes.flex}>
        <Avatar alt={selected.name} src={selected.avatar} />
        <p className={classes.name}>{selected.name}</p>
      </div>
    </>
  );

  return (
    <>
      <div className="employee_grid">{renderSpan}</div>
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <DialogTitle>Add / Transfer Shift</DialogTitle>
        <div className={classes.flex}>
          <div className={classes.flex}>
            <Avatar alt={props.name} src={props.avatar} />
            <p className={classes.name}>{props.name}</p>
          </div>
          {selected && transferShiftSelected}
        </div>
        {error && errorElement}
        {/* <section className={classes.error}>{error && errorElement}</section> */}
        {/* <section>{date}</section> */}
        <form>
          <div className={classes.root}>
            <TextField
              autoFocus
              margin="dense"
              id="start_time"
              label="Start Time"
              value={startTime}
              type="time"
            />
            <TextField
              autoFocus
              margin="dense"
              id="end_time"
              label="End Time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              type="text"
              placeholder={parseInt(startTime) + 1 + ":00"}
            />
          </div>
        </form>
        <DialogActions>
          <CategoryButton
            categories={categories}
            setCategorySelected={setCategorySelected}
            categorySelected={categorySelected}
          />
          <TransferShiftMenuButton
            users={users}
            setSelected={setSelected}
            setCategorySelected={categorySelected.id}
          />
          <Button onClick={reset} variant="contained">
            Back
          </Button>
          <>
            <Button
              onClick={deleteConfirmOpen}
              color="secondary"
              variant="contained"
            >
              Delete
            </Button>
            <Dialog variant='filled' open={deleteConfirm}>
              <Delete
                onConfirm={handleDelete}
                message={"Are you sure you want to delete these shifts"}
                onCancel={deleteConfirmClose}
              />
            </Dialog>
          </>
          {!error && (
            <>
              <Button onClick={!selected ? validate : handleOpen2} color="primary" variant="contained">
                Submit
              </Button>
              {selected && 
              <Dialog variant='filled' open={warning}>
                <Transfer
                  onConfirm={validate}
                  message={"Are you sure you want to transfer the shift(s)"}
                  onCancel={handleClose2}
                />
              </Dialog>
              }
            </>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EmployeeGrid;
